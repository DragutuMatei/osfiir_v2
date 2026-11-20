import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { app, db } from "../../utils/firebase";
import { SPECTACOL_COLLECTION } from "./SpectacolRedirect";
import "./spectacolStats.scss";

const ALLOWED_DOMAIN = "osfiir.ro";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ hd: ALLOWED_DOMAIN, prompt: "select_account" });

const isAllowed = (user) =>
  !!user &&
  user.emailVerified &&
  (user.email || "").toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`);

const toDate = (s) =>
  s.scannedAt?.toDate ? s.scannedAt.toDate() : new Date(s.clientTimestampMs || 0);

const uniqueKey = (s) => s.visitorId || s.ip || s.id;

function countBy(items, keyFn, uniqFn) {
  const map = new Map();
  items.forEach((it) => {
    const k = keyFn(it) ?? "necunoscut";
    if (!map.has(k)) map.set(k, { key: k, total: 0, uniq: new Set() });
    const e = map.get(k);
    e.total += 1;
    if (uniqFn) e.uniq.add(uniqFn(it));
  });
  return [...map.values()]
    .map((e) => ({ key: e.key, total: e.total, unique: e.uniq.size }))
    .sort((a, b) => b.total - a.total);
}

function BarList({ title, rows, showUnique = true, limit = 10 }) {
  const max = Math.max(1, ...rows.map((r) => r.total));
  return (
    <div className="ss-card">
      <h3>{title}</h3>
      {rows.length === 0 && <p className="ss-muted">Nicio dată încă</p>}
      {rows.slice(0, limit).map((r) => (
        <div className="ss-bar" key={r.key}>
          <div className="ss-bar__label" title={r.key}>
            {r.key}
          </div>
          <div className="ss-bar__track">
            <div
              className="ss-bar__fill"
              style={{ width: `${(r.total / max) * 100}%` }}
            />
          </div>
          <div className="ss-bar__val">
            {r.total}
            {showUnique && <span> / {r.unique} unici</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function exportCsv(scans) {
  const cols = [
    "date", "source", "visitorId", "returning", "ip", "country", "region",
    "city", "isp", "gpsPermission", "gpsLat", "gpsLon", "gpsAccuracy",
    "os", "browser", "deviceType", "language", "timezone", "referrer", "userAgent",
  ];
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = scans.map((s) =>
    [
      toDate(s).toISOString(), s.source, s.visitorId, s.returning, s.ip,
      s.country, s.region, s.city, s.isp, s.gpsPermission, s.gps?.lat,
      s.gps?.lon, s.gps?.accuracy, s.os, s.browser, s.deviceType, s.language,
      s.timezone, s.referrer, s.userAgent,
    ].map(esc).join(",")
  );
  const blob = new Blob([[cols.join(","), ...lines].join("\n")], {
    type: "text/csv;charset=utf-8",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `spectacol2026_scans_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function SpectacolStats() {
  const [user, setUser] = useState(undefined);
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sourceFilter, setSourceFilter] = useState("toate");

  useEffect(
    () =>
      onAuthStateChanged(auth, async (u) => {
        if (u && !isAllowed(u)) {
          await signOut(auth);
          setError(`Doar conturile @${ALLOWED_DOMAIN} au acces.`);
          setUser(null);
          return;
        }
        setUser(u);
      }),
    []
  );

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const snap = await getDocs(
        query(collection(db, SPECTACOL_COLLECTION), orderBy("scannedAt", "desc"))
      );
      setScans(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) {
      setError(`Nu am putut încărca datele: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) load();
  }, [user, load]);

  const login = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      setError(e.message);
    }
  };

  const filtered = useMemo(
    () =>
      sourceFilter === "toate"
        ? scans
        : scans.filter((s) => s.source === sourceFilter),
    [scans, sourceFilter]
  );

  const stats = useMemo(() => {
    const s = filtered;
    const today = new Date().toDateString();
    const byDay = countBy(
      s,
      (x) => toDate(x).toISOString().slice(0, 10),
      uniqueKey
    ).sort((a, b) => a.key.localeCompare(b.key));
    const byHour = countBy(
      s,
      (x) => `${String(toDate(x).getHours()).padStart(2, "0")}:00`,
      uniqueKey
    ).sort((a, b) => a.key.localeCompare(b.key));
    return {
      total: s.length,
      uniqueVisitors: new Set(s.map(uniqueKey)).size,
      uniqueIps: new Set(s.map((x) => x.ip).filter(Boolean)).size,
      today: s.filter((x) => toDate(x).toDateString() === today).length,
      withGps: s.filter((x) => x.gps).length,
      bySource: countBy(s, (x) => x.source, uniqueKey),
      byCity: countBy(
        s,
        (x) => (x.city ? `${x.city}${x.country ? `, ${x.country}` : ""}` : null),
        uniqueKey
      ),
      byCountry: countBy(s, (x) => x.country, uniqueKey),
      byIsp: countBy(s, (x) => x.isp, uniqueKey),
      byOs: countBy(s, (x) => x.os, uniqueKey),
      byBrowser: countBy(s, (x) => x.browser, uniqueKey),
      byDevice: countBy(s, (x) => x.deviceType, uniqueKey),
      byDay,
      byHour,
    };
  }, [filtered]);

  const sources = useMemo(
    () => [...new Set(scans.map((s) => s.source))].sort(),
    [scans]
  );

  if (user === undefined) {
    return <div className="ss ss-center">Se încarcă...</div>;
  }

  if (!user) {
    return (
      <div className="ss ss-center">
        <div className="ss-card ss-login">
          <h2>Statistici Spectacol Caritabil 2026</h2>
          <p className="ss-muted">Acces doar cu contul @{ALLOWED_DOMAIN}</p>
          <button className="ss-btn" onClick={login}>
            Login cu Google
          </button>
          {error && <p className="ss-error">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="ss">
      <header className="ss-header">
        <div>
          <h1>Spectacol Caritabil 2026 — scanări QR</h1>
          <p className="ss-muted">Logat ca {user.email}</p>
        </div>
        <div className="ss-actions">
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
          >
            <option value="toate">Toate sursele</option>
            {sources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button className="ss-btn" onClick={load} disabled={loading}>
            {loading ? "Se încarcă..." : "Reîncarcă"}
          </button>
          <button className="ss-btn ss-btn--ghost" onClick={() => exportCsv(filtered)}>
            Export CSV
          </button>
          <button className="ss-btn ss-btn--ghost" onClick={() => signOut(auth)}>
            Logout
          </button>
        </div>
      </header>

      {error && <p className="ss-error">{error}</p>}

      <div className="ss-kpis">
        <div className="ss-kpi"><b>{stats.total}</b><span>scanări totale</span></div>
        <div className="ss-kpi"><b>{stats.uniqueVisitors}</b><span>vizitatori unici (dispozitive)</span></div>
        <div className="ss-kpi"><b>{stats.uniqueIps}</b><span>IP-uri unice</span></div>
        <div className="ss-kpi"><b>{stats.today}</b><span>scanări azi</span></div>
        <div className="ss-kpi"><b>{stats.withGps}</b><span>cu locație GPS</span></div>
      </div>

      <div className="ss-grid">
        <BarList title="Surse (afiș / pliant)" rows={stats.bySource} />
        <BarList title="Orașe" rows={stats.byCity} />
        <BarList title="Pe zile" rows={stats.byDay} limit={60} />
        <BarList title="Pe ore" rows={stats.byHour} limit={24} />
        <BarList title="Sistem de operare" rows={stats.byOs} />
        <BarList title="Browser / aplicație" rows={stats.byBrowser} />
        <BarList title="Tip dispozitiv" rows={stats.byDevice} />
        <BarList title="Operator / ISP" rows={stats.byIsp} />
        <BarList title="Țări" rows={stats.byCountry} />
      </div>

      <div className="ss-card">
        <h3>Ultimele scanări</h3>
        <div className="ss-table-wrap">
          <table className="ss-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Sursă</th>
                <th>IP</th>
                <th>Locație</th>
                <th>GPS</th>
                <th>Dispozitiv</th>
                <th>Revenit</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 200).map((s) => (
                <tr key={s.id}>
                  <td>{toDate(s).toLocaleString("ro-RO")}</td>
                  <td>{s.source}</td>
                  <td>{s.ip || "—"}</td>
                  <td>{[s.city, s.region, s.country].filter(Boolean).join(", ") || "—"}</td>
                  <td>
                    {s.gps ? (
                      <a
                        href={`https://www.google.com/maps?q=${s.gps.lat},${s.gps.lon}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        hartă (±{Math.round(s.gps.accuracy)}m)
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>{[s.os, s.browser, s.uaHints?.model].filter(Boolean).join(" · ")}</td>
                  <td>{s.returning ? "da" : "nu"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SpectacolStats;
