import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 For Flund. Tous droits réservés.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
    },
};

export default Footer;
