import React, { useEffect, useState } from 'react';

export default function Level19Echipa() {
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        // Generăm HAR-ul "artificial"
        const harData = {
            log: {
                version: "1.2",
                creator: {
                    name: "WebInspector",
                    version: "537.36"
                },
                pages: [
                    {
                        startedDateTime: new Date().toISOString(),
                        id: "page_1",
                        title: "OSFIIR Global Analytics",
                        pageTimings: {
                            onContentLoad: 1500,
                            onLoad: 3000
                        }
                    }
                ],
                entries: [
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
        
        // Auto-download la o secundă după montare
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
                    ✅ Jurnalul de trafic brut (<b>interception.har</b>) a fost descărcat. <br/><br/>
                    Analizează acest fișier în modulul de Network (DevTools) pentru a descoperi cheia.
                </div>
            ) : (
                <div style={{ padding: '20px', color: '#ffaa00' }}>
                    ⏳ Se interceptează traficul... (descărcare automată în curs)
                </div>
            )}
        </div>
    );
}
