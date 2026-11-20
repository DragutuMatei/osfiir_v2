import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const SPECTACOL_COLLECTION = "spectacol2026_scans";
const TARGET_URL = "https://spectacol2026.osfiir.ro";
const VISITOR_KEY = "osfiir_visitor_id";
const MAX_WAIT_MS = 2500; // redirect no matter what after this

// Resolves to fallback if the promise takes too long or throws.
const withTimeout = (promise, ms, fallback = null) =>
  Promise.race([
    Promise.resolve(promise).catch(() => fallback),
    new Promise((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);

const randomId = () =>
  (window.crypto && crypto.randomUUID && crypto.randomUUID()) ||
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

// Persistent per-browser id, used to count unique visitors (IP alone is shared on mobile networks).
function getVisitorId() {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    const isNew = !id;
    if (!id) {
      id = randomId();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return { visitorId: id, returning: !isNew };
  } catch (e) {
    return { visitorId: null, returning: null };
  }
}

// Public IP + approximate (IP-based) location. Requires no permission.
async function getIpInfo() {
  try {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const d = await res.json();
    return {
      ip: d.ip || null,
      country: d.country || null,
      countryCode: d.country_code || null,
      region: d.region || null,
      city: d.city || null,
      ipLat: d.latitude ? Number(d.latitude) : null,
      ipLon: d.longitude ? Number(d.longitude) : null,
      isp: d.organization_name || d.organization || null,
      ipTimezone: d.timezone || null,
    };
  } catch (e) {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const d = await res.json();
      return { ip: d.ip || null };
    } catch (e2) {
      return null;
    }
  }
}

// Precise GPS location ONLY if the user already granted permission to this site.
// Never triggers the browser permission prompt.
async function getGpsIfAlreadyGranted() {
  try {
    if (!navigator.permissions || !navigator.geolocation) return null;
    const status = await navigator.permissions.query({ name: "geolocation" });
    if (status.state !== "granted") return { gpsPermission: status.state };
    const pos = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 10 * 60 * 1000,
      })
    );
    return {
      gpsPermission: "granted",
      gps: {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      },
    };
  } catch (e) {
    return null;
  }
}

async function getUaHints() {
  try {
    const uad = navigator.userAgentData;
    if (!uad) return null;
    const hi = uad.getHighEntropyValues
      ? await uad.getHighEntropyValues(["model", "platformVersion"])
      : {};
    return {
      mobile: uad.mobile ?? null,
      platform: uad.platform || null,
      platformVersion: hi.platformVersion || null,
      model: hi.model || null,
      brands: (uad.brands || []).map((b) => `${b.brand} ${b.version}`),
    };
  } catch (e) {
    return null;
  }
}

function parseDevice(ua) {
  let os = "Altul";
  if (/android/i.test(ua)) os = "Android";
  else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
  else if (/windows/i.test(ua)) os = "Windows";
  else if (/mac os x/i.test(ua)) os = "macOS";
  else if (/linux/i.test(ua)) os = "Linux";

  let browser = "Altul";
  if (/instagram/i.test(ua)) browser = "Instagram";
  else if (/fban|fbav/i.test(ua)) browser = "Facebook";
  else if (/samsungbrowser/i.test(ua)) browser = "Samsung Internet";
  else if (/edg\//i.test(ua)) browser = "Edge";
  else if (/opr\//i.test(ua)) browser = "Opera";
  else if (/crios|chrome/i.test(ua)) browser = "Chrome";
  else if (/fxios|firefox/i.test(ua)) browser = "Firefox";
  else if (/safari/i.test(ua)) browser = "Safari";

  const deviceType = /ipad|tablet/i.test(ua)
    ? "tablet"
    : /mobi|android|iphone/i.test(ua)
    ? "mobil"
    : "desktop";

  return { os, browser, deviceType };
}

function SpectacolRedirect() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let done = false;
    const redirect = () => {
      if (done) return;
      done = true;
      window.location.replace(TARGET_URL);
    };
    const hardStop = setTimeout(redirect, MAX_WAIT_MS + 1500);

    const logAndRedirect = async () => {
      try {
        const source = (searchParams.get("source") || "direct")
          .toLowerCase()
          .trim()
          .slice(0, 40);
        const ua = navigator.userAgent || "";
        const { visitorId, returning } = getVisitorId();
        const conn =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;

        const [ipInfo, gpsInfo, uaHints] = await Promise.all([
          withTimeout(getIpInfo(), MAX_WAIT_MS - 300),
          withTimeout(getGpsIfAlreadyGranted(), MAX_WAIT_MS - 300),
          withTimeout(getUaHints(), 500),
        ]);

        const payload = {
          source,
          visitorId,
          returning,
          scannedAt: serverTimestamp(),
          clientTimestampMs: Date.now(),
          ...(ipInfo || { ip: null }),
          gpsPermission: gpsInfo?.gpsPermission || "unknown",
          gps: gpsInfo?.gps || null,
          ...parseDevice(ua),
          userAgent: ua,
          uaHints: uaHints || null,
          language: navigator.language || null,
          languages: navigator.languages ? [...navigator.languages] : null,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
          screen: {
            w: window.screen?.width || null,
            h: window.screen?.height || null,
            dpr: window.devicePixelRatio || null,
          },
          touchPoints: navigator.maxTouchPoints ?? null,
          deviceMemory: navigator.deviceMemory ?? null,
          cpuCores: navigator.hardwareConcurrency ?? null,
          connection: conn
            ? {
                type: conn.type || null,
                effectiveType: conn.effectiveType || null,
                downlink: conn.downlink ?? null,
              }
            : null,
          referrer: document.referrer || null,
          query: Object.fromEntries(searchParams.entries()),
        };

        await withTimeout(
          addDoc(collection(db, SPECTACOL_COLLECTION), payload),
          1500
        );
      } catch (e) {
        // Ignore: the redirect must always happen.
      } finally {
        clearTimeout(hardStop);
        redirect();
      }
    };

    logAndRedirect();
    return () => clearTimeout(hardStop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <h1>Se încarcă...</h1>
    </div>
  );
}

export default SpectacolRedirect;
