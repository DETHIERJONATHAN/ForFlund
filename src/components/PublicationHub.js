import React, { useState } from "react";
import PublicationForm from "./PublicationForm";
import Publication from "./Publication";

const PublicationHub = () => {
    const [publications, setPublications] = useState([]);
    const [publicationType, setPublicationType] = useState("Flund Hub");

    const handleFormSubmit = (formData) => {
        const newPublication = { ...formData, id: Date.now(), type: publicationType };
        setPublications([...publications, newPublication]);
    };

    const handlePublicationTypeChange = (e) => {
        setPublicationType(e.target.value);
    };

    return (
        <div>
            <h1>Hub de publication</h1>
            <label>Sélectionnez le type de publication :</label>
            <select value={publicationType} onChange={handlePublicationTypeChange}>
                <option value="Flund Hub">Flund Hub</option>
                <option value="Market Flund">Market Flund</option>
                <option value="Jobs Flund">Jobs Flund</option>
                <option value="Évents Flund">Évents Flund</option>
                <option value="Flund TV">Flund TV</option>
            </select>

            <hr />

            <PublicationForm publicationType={publicationType} onSubmit={handleFormSubmit} />

            <h2>Publications</h2>
            {publications.map((publication) => (
                <Publication
                    key={publication.id}
                    title={publication.title}
                    content={publication.content}
                    images={publication.images}
                    video={publication.video}
                    application={publication.type}
                    onSubmit={handleFormSubmit}
                />
            ))}
        </div>
    );
};

export default PublicationHub;
