import React from "react";

const FlundTV = () => {
    return (
        <div style={styles.flundTV}>
            <h2>Flund TV</h2>
            <p>Chaîne vidéo dédiée pour du contenu inspirant et des événements en direct.</p>
        </div>
    );
};

const styles = {
    flundTV: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default FlundTV;
