import React, { useState, useEffect } from "react";
import PublicationViewer from "../components/PublicationViewer";

const Troc = () => {
    const [publications, setPublications] = useState([]);

    // Simuler des publications pour le Troc
    useEffect(() => {
        const trocPublications = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            type: "Troc",
            content: `Publication Troc ${i + 1}`,
        }));
        setPublications(trocPublications);
    }, []);

    return (
        <div style={styles.troc}>
            <h2>Troc Flund</h2>
            <PublicationViewer publications={publications} />
        </div>
    );
};

const styles = {
    troc: {
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
};

export default Troc;
