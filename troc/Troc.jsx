import React from "react";

const Troc = () => {
    return (
        <div style={styles.troc}>
            <h2>Troc Flund</h2>
            <p>�changez des biens et services sans argent.</p>
            {/* Int�gration des fonctionnalit�s de troc ici */}
        </div>
    );
};

const styles = {
    troc: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default Troc;
