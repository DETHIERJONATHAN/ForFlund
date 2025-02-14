import React, { useState } from "react";

const PublicationForm = ({ onPublish }) => {
    const [type, setType] = useState("post");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            onPublish({ type, content });
            setContent("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="post">Post</option>
                <option value="event">Événement</option>
                <option value="job">Offre d'emploi</option>
                <option value="market">Marketplace</option>
                <option value="troc">Troc</option>
            </select>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Quoi de neuf ?"
                required
            />
            <button type="submit">Publier</button>
        </form>
    );
};

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem",
    },
};

export default PublicationForm;
