import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import PublicationForm from "../components/PublicationForm";

const FlundHub = () => {
    const [publications, setPublications] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedPublication, setSelectedPublication] = useState(null);

    // Fonction pour simuler le chargement des publications
    const loadPublications = async (page) => {
        setLoading(true);
        // Simule un appel API (remplacez par une vraie API si nécessaire)
        const newPublications = Array.from({ length: 10 }, (_, i) => ({
            id: publications.length + i + 1,
            type: "Post",
            content: `Publication ${publications.length + i + 1}`,
        }));
        setPublications((prev) => [...prev, ...newPublications]);
        setLoading(false);
    };

    // Charger les publications initiales
    useEffect(() => {
        loadPublications(page);
    }, []);

    // Détecter le scroll pour charger plus de publications
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100 && !loading
            ) {
                setPage((prev) => prev + 1);
                loadPublications(page + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    // Gestion des swipes dans une publication
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (selectedPublication !== null) {
                setSelectedPublication((prev) => (prev + 1) % publications.length);
            }
        },
        onSwipedRight: () => {
            if (selectedPublication !== null) {
                setSelectedPublication((prev) => (prev - 1 + publications.length) % publications.length);
            }
        },
        onSwipedDown: () => {
            setSelectedPublication(null);
        },
    });

    return (
        <div style={styles.hub}>
            <h2>Flund Hub</h2>
            <PublicationForm onPublish={(newPublication) => {
                setPublications([{ ...newPublication, id: publications.length + 1 }, ...publications]);
            }} />
            <div style={styles.appContent} {...handlers}>
                {selectedPublication === null ? (
                    publications.map((pub) => (
                        <div key={pub.id} style={styles.publication} onClick={() => setSelectedPublication(pub.id - 1)}>
                            <h3>{pub.type}</h3>
                            <p>{pub.content}</p>
                        </div>
                    ))
                ) : (
                    <div style={styles.selectedPublication}>
                        <h3>{publications[selectedPublication].type}</h3>
                        <p>{publications[selectedPublication].content}</p>
                    </div>
                )}
                {loading && <p>Chargement en cours...</p>}
            </div>
        </div>
    );
};

const styles = {
    hub: {
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    appContent: {
        padding: "1.5rem",
        border: "1px solid #ddd",
        borderRadius: "12px",
    },
    publication: {
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
    },
    selectedPublication: {
        padding: "1rem",
    },
};

export default FlundHub;
