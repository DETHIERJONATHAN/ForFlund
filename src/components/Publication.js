import React, { useState } from "react";

const Publication = ({ title, content, images, video, application, onSubmit }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = (comment) => {
        setComments([...comments, comment]);
    };

    const handleAction = () => {
        switch (application) {
            case "Jobs Flund":
                onSubmit({ cv: "cv.pdf", coverLetter: "Lettre de motivation" });
                break;
            case "Évents Flund":
                onSubmit({ participation: "Je participe" });
                break;
            // Ajouter les autres cas ici
            default:
                break;
        }
    };

    return (
        <div className="publication">
            <h2>{title}</h2>
            <p>{content}</p>
            {images.map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
            ))}
            {video && <video controls src={URL.createObjectURL(video)} />}

            <div className="interactions">
                <button onClick={handleLike}>Jaime ({likes})</button>
                <button onClick={() => handleComment(prompt("Votre commentaire :"))}>Commenter</button>
                <button>Partager</button>
                <button onClick={handleAction}>
                    {application === "Jobs Flund" ? "Postuler" : "Je participe"}
                </button>
            </div>
        </div>
    );
};

export default Publication;
