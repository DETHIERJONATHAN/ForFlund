import React from "react";

const RightColumn = () => {
    return (
        <div style={styles.rightColumn}>
            <h3>Messenger</h3>

            <div style={styles.section}>
                <h4>Contacts récents</h4>
                <div style={styles.contactList}>
                    <div style={styles.contact}>
                        <img src="https://via.placeholder.com/40" alt="Avatar" style={styles.avatar} />
                        <span>Jean Dupont</span>
                        <div style={styles.status} className="online"></div>
                    </div>
                    <div style={styles.contact}>
                        <img src="https://via.placeholder.com/40" alt="Avatar" style={styles.avatar} />
                        <span>Marie Curie</span>
                        <div style={styles.status} className="offline"></div>
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <h4>Discussions épinglées</h4>
                <div style={styles.pinnedChats}>
                    <div style={styles.chat}>
                        <i className="fas fa-thumbtack" style={styles.icon}></i>
                        <span>Projet Solidaire</span>
                    </div>
                    <div style={styles.chat}>
                        <i className="fas fa-thumbtack" style={styles.icon}></i>
                        <span>Équipe For Flund</span>
                    </div>
                </div>
            </div>

            <div style={styles.chatBubble}>
                <i className="fas fa-comment-dots" style={styles.chatIcon}></i>
            </div>
        </div>
    );
};

const styles = {
    rightColumn: {
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
    contactList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    contact: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    },
    status: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        marginLeft: "auto",
    },
    online: {
        backgroundColor: "green",
    },
    offline: {
        backgroundColor: "gray",
    },
    pinnedChats: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    chat: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    icon: {
        width: "20px",
        textAlign: "center",
    },
    chatBubble: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        backgroundColor: "var(--primary-color)",
        color: "white",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
    },
    chatIcon: {
        fontSize: "1.25rem",
    },
};

export default RightColumn;
