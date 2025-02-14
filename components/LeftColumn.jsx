import React from "react";

const LeftColumn = () => {
    return (
        <div style={styles.leftColumn}>
            <h3>Informations & Accès Rapide</h3>

            <div style={styles.section}>
                <h4>Amis suggérés</h4>
                <div style={styles.friendList}>
                    <div style={styles.friend}>
                        <img src="https://via.placeholder.com/40" alt="Avatar" style={styles.avatar} />
                        <span>Jean Dupont</span>
                        <button style={styles.addButton}>Ajouter</button>
                    </div>
                    <div style={styles.friend}>
                        <img src="https://via.placeholder.com/40" alt="Avatar" style={styles.avatar} />
                        <span>Marie Curie</span>
                        <button style={styles.addButton}>Ajouter</button>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <h4>Événements à venir</h4>
                <div style={styles.eventList}>
                    <div style={styles.event}>
                        <i className="fas fa-calendar-alt" style={styles.icon}></i>
                        <span>Réunion solidaire - 25/10</span>
                    </div>
                    <div style={styles.event}>
                        <i className="fas fa-calendar-alt" style={styles.icon}></i>
                        <span>Atelier recyclage - 30/10</span>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <h4>Favoris</h4>
                <div style={styles.favorites}>
                    <button style={styles.favoriteButton}>
                        <i className="fas fa-shopping-cart" style={styles.icon}></i>
                        Market
                    </button>
                    <button style={styles.favoriteButton}>
                        <i className="fas fa-exchange-alt" style={styles.icon}></i>
                        Troc
                    </button>
                    <button style={styles.favoriteButton}>
                        <i className="fas fa-briefcase" style={styles.icon}></i>
                        Jobs
                    </button>
                </div>
            </div>

            <div style={styles.section}>
                <h4>Impact Solidaire</h4>
                <div style={styles.impactTracker}>
                    <div style={styles.impactItem}>
                        <i className="fas fa-hand-holding-heart" style={styles.icon}></i>
                        <span>10 dons</span>
                    </div>
                    <div style={styles.impactItem}>
                        <i className="fas fa-users" style={styles.icon}></i>
                        <span>50 bénéficiaires</span>
                    </div>
                    <div style={styles.impactItem}>
                        <i className="fas fa-leaf" style={styles.icon}></i>
                        <span>100 kg CO économisé</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    leftColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    section: {
        backgroundColor: "var(--card-background)",
        padding: "1rem",
        borderRadius: "var(--border-radius)",
        boxShadow: "var(--box-shadow)",
    },
    friendList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    friend: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    },
    addButton: {
        marginLeft: "auto",
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
    },
    eventList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    event: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    icon: {
        width: "20px",
        textAlign: "center",
    },
    favorites: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    favoriteButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem",
        width: "100%",
        textAlign: "left",
    },
    impactTracker: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    impactItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
};

export default LeftColumn;
