import React from "react";

const FlundCoins = () => {
    return (
        <div style={styles.flundCoins}>
            <h2>Flund Coins</h2>
            <p>Monnaie interne pour faciliter les transactions sur la plateforme.</p>
        </div>
    );
};

const styles = {
    flundCoins: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default FlundCoins;
