import React, { useState, useEffect } from "react";
import PublicationViewer from "../components/PublicationViewer";

const Market = () => {
    const [publications, setPublications] = useState([]);

    // Simuler des publications pour le Market
    useEffect(() => {
        const marketPublications = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            type: "Market",
            content: `Publication Market ${i + 1}`,
        }));
        setPublications(marketPublications);
    }, []);

    return (
        <div style={styles.market}>
            <h2>Market Flund</h2>
            <PublicationViewer publications={publications} />
        </div>
    );
};

const styles = {
    market: {
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
};

export default Market;
