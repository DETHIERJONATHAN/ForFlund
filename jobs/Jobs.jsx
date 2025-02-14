import React from "react";

const Jobs = () => {
    return (
        <div style={styles.jobs}>
            <h2>Jobs Flund</h2>
            <p>Trouvez des offres d'emploi et des missions solidaires.</p>
            {/* Intégration des fonctionnalités de jobs ici */}
        </div>
    );
};

const styles = {
    jobs: {
        backgroundColor: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default Jobs;
