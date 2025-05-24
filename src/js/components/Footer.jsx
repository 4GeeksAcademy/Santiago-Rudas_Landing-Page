import React from 'react';

function Footer() {
    return (
        <div>
            <footer style={{
                backgroundColor: "#080808",
                padding: "10px",
                textAlign: "center",
                fontStyle: "italic",
                color: "#ffffff",
                fontSize: "0.9rem",
                borderTop: "2px solid #d3d3d3"
            }}>
                <p style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    La patria no es solo tierra, es alma.
                    Es el eco de tus abuelos, el canto del río,
                    el aroma del café y el sol que despierta tus sueños.
                    Panamá vive en ti, como la sangre en tus venas.
                </p>
            </footer>
        </div>
    )
}

export default Footer;