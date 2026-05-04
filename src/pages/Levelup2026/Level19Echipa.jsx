import React, { useEffect, useState } from 'react';

export default function Level19Echipa() {
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        // Cele 50 de API-uri/Resurse extra pentru diversitate
        const extraEndpoints = [
            "/api/v1/metrics", "/api/v1/users/profile", "/cdn/assets/logo.png", "/api/v2/socket/init",
            "/api/auth/refresh", "/api/v1/logs/stream", "/api/v2/database/sync", "/static/js/main.chunk.js",
            "/api/v1/geo/lookup", "/api/v2/config/remote", "/api/v1/billing/status", "/api/v1/notifications",
            "/api/v1/search/query", "/api/v1/orders/history", "/api/v2/inventory/list", "/api/v1/support/tickets",
            "/api/v1/ads/tracking", "/api/v1/social/connect", "/api/v1/media/upload", "/api/v1/cron/tasks",
            "/api/v1/cache/purge", "/api/v2/reports/generate", "/api/v1/export/csv", "/api/v1/import/json",
            "/api/v1/security/scan", "/api/v1/firewall/status", "/api/v1/dns/records", "/api/v1/mail/outbox",
            "/api/v1/weather/fetch", "/api/v1/crypto/verify", "/api/v2/blockchain/ledger", "/api/v1/ai/predict",
            "/api/v1/iot/sensors", "/api/v1/fleet/tracking", "/api/v2/pos/transactions", "/api/v1/warehouse/stock",
            "/api/v1/hr/employees", "/api/v1/recruitment/jobs", "/api/v2/legal/documents", "/api/v1/internal/health",
            "/api/v1/devops/deploy", "/api/v1/git/hooks", "/api/v1/docker/containers", "/api/v1/kubernetes/pods",
            "/api/v1/aws/s3/buckets", "/api/v1/azure/vms", "/api/v1/gcp/functions", "/api/v1/graphql/endpoint",
            "/api/v1/rest/ping", "/api/v1/version/check"
        ];

        const extraEntries = extraEndpoints.map((endpoint, index) => ({
            startedDateTime: new Date(Date.now() - (index * 1000)).toISOString(),
            time: Math.floor(Math.random() * 500) + 50,
            request: {
                method: index % 5 === 0 ? "POST" : "GET",
                url: `https://osfiir.ro${endpoint}`,
                httpVersion: "HTTP/1.1",
                headers: [{ name: "User-Agent", value: "Mozilla/5.0" }],
                queryString: [],
                headersSize: -1,
                bodySize: 0
            },
            response: {
                status: 200,
                statusText: "OK",
                httpVersion: "HTTP/1.1",
                headers: [{ name: "Content-Type", value: "application/json" }],
                content: {
                    size: 20,
                    mimeType: "application/json",
                    text: JSON.stringify({ data: "encrypted_payload_" + Math.random().toString(36).substring(7) })
                },
                redirectURL: "",
                headersSize: -1,
                bodySize: 20
            },
            cache: {},
            timings: { send: 1, wait: Math.floor(Math.random() * 100), receive: 1 },
            pageref: "page_1"
        }));

        // Generăm HAR-ul "artificial"
        const harData = {
            log: {
                version: "1.2",
                creator: { name: "WebInspector", version: "537.36" },
                pages: [
                    {
                        startedDateTime: new Date().toISOString(),
                        id: "page_1",
                        title: "OSFIIR Global Analytics",
                        pageTimings: { onContentLoad: 1500, onLoad: 3000 }
                    }
                ],
                entries: [
                    // Intrările originale păstrate
                    {
                        startedDateTime: new Date().toISOString(),
                        time: 150,
                        request: {
                            method: "GET",
                            url: "https://osfiir.ro/api/analytics/ping",
                            httpVersion: "HTTP/1.1",
                            cookies: [],
                            headers: [],
                            queryString: [],
                            headersSize: -1,
                            bodySize: 0
                        },
                        response: {
                            status: 200,
                            statusText: "OK",
                            httpVersion: "HTTP/1.1",
                            cookies: [],
                            headers: [],
                            content: {
                                size: 15,
                                mimeType: "application/json",
                                text: "{\"status\":\"ok\"}"
                            },
                            redirectURL: "",
                            headersSize: -1,
                            bodySize: 15
                        },
                        cache: {},
                        timings: { send: 0, wait: 100, receive: 50 },
                        pageref: "page_1"
                    },
                    ...extraEntries, // Cele 50 de intrări noi intercalate
                    {
                        startedDateTime: new Date(Date.now() + 500).toISOString(),
                        time: 320,
                        request: {
                            method: "POST",
                            url: "https://osfiir.ro/root/override",
                            httpVersion: "HTTP/1.1",
                            cookies: [{ name: "session_id", value: "x99-alpha" }],
                            headers: [{ name: "Content-Type", value: "application/json" }],
                            queryString: [],
                            postData: {
                                mimeType: "application/json",
                                text: "{\"action\":\"auth_request\",\"target\":\"ROOT_ARCHIVE\"}"
                            },
                            headersSize: -1,
                            bodySize: 45
                        },
                        response: {
                            status: 403,
                            statusText: "Forbidden",
                            httpVersion: "HTTP/1.1",
                            cookies: [],
                            headers: [{ name: "Content-Type", value: "application/json" }],
                            content: {
                                size: 54,
                                mimeType: "application/json",
                                text: "{\"status\": \"blocked\", \"override_code\": \"HAR_ANALYTICS_77\"}"
                            },
                            redirectURL: "",
                            headersSize: -1,
                            bodySize: 54
                        },
                        cache: {},
                        timings: { send: 10, wait: 300, receive: 10 },
                        pageref: "page_1"
                    }
                ]
            }
        };

        const blob = new Blob([JSON.stringify(harData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'interception.har';
        document.body.appendChild(a);
        
        const timer = setTimeout(() => {
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            setDownloaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0a0a0c',
            color: '#00ffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            textAlign: 'center'
        }}>
            <h1 style={{ textShadow: '0 0 10px #00ffff' }}>OSFIIR — ECHIPA INTERCEPTĂRII</h1>
            <p style={{ maxWidth: '500px', margin: '20px 0', color: '#aaa' }}>
                Conexiune securizată stabilită prin nodul QR.
            </p>
            {downloaded ? (
                <div style={{ padding: '20px', border: '1px solid #00ffff', background: 'rgba(0, 255, 255, 0.1)' }}>
                      Poate ca e corect ... sau nu .... </div>
            ) : (
                <div style={{ padding: '20px', color: '#ffaa00' }}>
                    ⏳ Se interceptează traficul... (descărcare automată în curs)
                </div>
            )}
        </div>
    );
}