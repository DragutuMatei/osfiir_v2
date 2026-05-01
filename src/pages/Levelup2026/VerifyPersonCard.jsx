import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './VerifyPersons.scss';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function monthFromTimestamp(ts) {
  if (!ts || typeof ts !== 'string') return '';
  return ts.slice(0, 3).toUpperCase();
}

export default function VerifyPersons() {
  const q = useQuery();
  const nume = q.get('nume') ?? '';
  const id = q.get('id') ?? '';
  const timestamp = q.get('timestamp') ?? '';

  const month = monthFromTimestamp(timestamp);
  const suspicious = month && month !== 'OCT';
  const avatarUrl = `https://api.dicebear.com/9.x/big-ears-neutral/png?seed=${encodeURIComponent(nume || 'UNKNOWN')}`;

  return (
    <div className="vp">
      <div className="vp__scanlines" />
      <div className="vp__vignette" />

      <header className="vp__header">
        <div>
          <div className="vp__title">VERIFY PERSONS</div>
          <div className="vp__sub">OSFIIR · SECURITY TERMINAL · 2026</div>
        </div>
        <Link className="vp__back" to="/auth">EXIT</Link>
      </header>

      <main className="vp__main">
        <section className="vp__card">
          <div className="vp__cardHead">
            <span>RECORD</span>
            <span className={`vp__flag ${suspicious ? 'vp__flag--bad' : 'vp__flag--ok'}`}>
              {suspicious ? 'WARNING' : 'MATCH'}
            </span>
          </div>

          <div className="vp__body">
            <div className="vp__avatar">
              <img src={avatarUrl} alt="avatar" />
            </div>
            <div className="vp__kv">
              <div><span>NAME</span><b>{nume || '—'}</b></div>
              <div><span>ID</span><b>{id || '—'}</b></div>
              <div><span>TIMESTAMP</span><b>{timestamp || '—'}</b></div>
            </div>
          </div>

          <div className={`vp__msg ${suspicious ? 'vp__msg--bad' : 'vp__msg--ok'}`}>
            {suspicious
              ? `Timestamp month is suspicious (${month}). Event month should be OCT.`
              : `Record matches event month (OCT).`}
          </div>
        </section>

        <section className="vp__note">
          <div className="vp__noteTitle">NOTE</div>
          <div className="vp__noteText">
            This page is not synchronized with the game. It displays query parameters exactly as received.
          </div>
        </section>
      </main>
    </div>
  );
}

