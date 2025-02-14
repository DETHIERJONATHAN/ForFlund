import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} style={styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher..."
            />
            <button type="submit"></button>
        </form>
    );
};

const styles = {
    searchBar: {
        display: "flex",
        gap: "0.5rem",
        marginBottom: "1rem",
    },
};

export default SearchBar;
