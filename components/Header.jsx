import React from "react";

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>For Flund</h1>
            <p>Plateforme solidaire et innovante</p>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "1rem",
        textAlign: "center",
    },
};

export default Header;
