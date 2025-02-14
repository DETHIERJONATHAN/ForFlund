import React from "react";

const Events = () => {
    return (
        <div style={styles.events}>
            <h2>�vents Flund</h2>
            <p>Organisation et participation � des �v�nements solidaires.</p>
        </div>
    );
};

const styles = {
    events: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default Events;
