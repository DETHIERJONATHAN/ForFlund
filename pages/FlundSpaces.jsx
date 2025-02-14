import React from "react";

const FlundSpaces = () => {
    return (
        <div style={styles.flundSpaces}>
            <h2>Flund Spaces</h2>
            <p>Espaces thématiques pour échanger et collaborer autour de causes spécifiques.</p>
        </div>
    );
};

const styles = {
    flundSpaces: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default FlundSpaces;
