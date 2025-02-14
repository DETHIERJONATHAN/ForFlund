import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const PublicationViewer = ({ publications }) => {
    const [selectedPublication, setSelectedPublication] = useState(null);

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
            if (selectedPublication !== null) {
                setSelectedPublication(null);
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} style={styles.container}>
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
        </div>
    );
};

const styles = {
    container: {
        width: "100%",
        height: "100%",
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
        border: "1px solid #ddd",
        borderRadius: "8px",
    },
};

export default PublicationViewer;
