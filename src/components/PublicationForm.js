import React, { useState } from "react";

const PublicationForm = ({ publicationType, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content, images, video });
    };

    const renderSpecificFields = () => {
        switch (publicationType) {
            case "Market Flund":
                return (
                    <>
                        <label>Prix</label>
                        <input type="number" name="price" />
                        <label>Localisation</label>
                        <input type="text" name="location" />
                    </>
                );
            case "Jobs Flund":
                return (
                    <>
                        <label>CV</label>
                        <input type="file" name="cv" />
                        <label>Lettre de motivation</label>
                        <textarea name="coverLetter" />
                    </>
                );
            // Ajouter les autres cas ici
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Titre</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Contenu</label>
            <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} required />

            <label>Images</label>
            <input type="file" multiple onChange={(e) => setImages([...e.target.files])} />

            <label>Vidéo</label>
            <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />

            {renderSpecificFields()}

            <button type="submit">Publier</button>
        </form>
    );
};

export default PublicationForm;
