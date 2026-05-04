import React from 'react';

export default function Level19Decoy() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#050000',
            color: '#ff0000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            textAlign: 'center',
            padding: '20px'
        }}>
            <style>{`
                @keyframes glitch {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) }
                    40% { transform: translate(-2px, -2px) }
                    60% { transform: translate(2px, 2px) }
                    80% { transform: translate(2px, -2px) }
                    100% { transform: translate(0) }
                }
                .glitch-text {
                    animation: glitch 0.2s infinite;
                    font-size: 3rem;
                    font-weight: bold;
                    text-shadow: 0 0 10px red;
                    margin-bottom: 20px;
                }
            `}</style>

            <h2 style={{ color: '#ff5555' }}>CRITICAL SECURITY ALERT</h2>

            <p className='glitch-text' style={{ marginTop: '30px', color: '#aaaaaa' }}>
                Poate ca e corect ... sau nu ....
            </p>
        </div>
    );
}
