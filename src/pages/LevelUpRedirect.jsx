import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";

const TARGET_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfgNjuQNcZYN0mjlR3j2o2TDSUrELblExGVei1km9eUt_MHsQ/viewform";

function LevelUpRedirect() {
  const { material } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const logAndRedirect = async () => {
      const url = new URL(window.location.href);

      const payload = {
        event: "LevelUp",
        material: material || null,
        scannedAt: serverTimestamp(),
        clientTimestampMs: Date.now(),
        userAgent: navigator.userAgent,
        language: navigator.language || null,
        languages: navigator.languages || null,
        platform: navigator.platform || null,
        vendor: navigator.vendor || null,
        referrer: document.referrer || null,
        path: url.pathname,
        query: Object.fromEntries(searchParams.entries()),
      };

      try {
        await addDoc(collection(db, "qr_scans"), payload);
      } catch (e) {
        // Intentionally ignore: redirect must still happen.
      } finally {
        window.location.replace(TARGET_URL);
      }
    };

    logAndRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Se incarca redirectul....</h1>
    </div>
  );
}

export default LevelUpRedirect;
