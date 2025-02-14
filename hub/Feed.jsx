import React, { useState } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (content) => {
        setPosts([...posts, { id: posts.length + 1, content }]);
    };

    return (
        <div style={styles.feed}>
            <h2>Flund Hub</h2>
            <div style={styles.posts}>
                {posts.map((post) => (
                    <div key={post.id} style={styles.post}>
                        <p>{post.content}</p>
                        <div style={styles.actions}>
                            <button>Like</button>
                            <button>Commenter</button>
                            <button>Partager</button>
                        </div>
                    </div>
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const content = e.target.content.value;
                    if (content) {
                        addPost(content);
                        e.target.content.value = "";
                    }
                }}
            >
                <textarea name="content" placeholder="Publier quelque chose..." required />
                <button type="submit">Publier</button>
            </form>
        </div>
    );
};

const styles = {
    feed: {
        padding: "1rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    posts: {
        marginTop: "1rem",
    },
    post: {
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
    },
    actions: {
        marginTop: "0.5rem",
    },
};

export default Feed;
