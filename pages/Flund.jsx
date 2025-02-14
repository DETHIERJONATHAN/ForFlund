import React, { useState, useEffect } from "react";
import PublicationViewer from "../components/PublicationViewer";

const Flund = () => {
    const [publications, setPublications] = useState([]);

    // Simuler des publications pour Flund
    useEffect(() => {
        const flundPublications = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            type: "Flund",
            content: `Publication Flund ${i + 1}`,
        }));
        setPublications(flundPublications);
    }, []);

    return (
        <div style={styles.flund}>
            <h2>Flund</h2>
            <PublicationViewer publications={publications} />
        </div>
    );
};

const styles = {
    flund: {
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
};

export default Flund;
