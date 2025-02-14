import React, { useState } from "react";

const Market = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({ category: "", location: "", priceRange: "" });

    const addItem = (item) => {
        setItems([...items, { id: items.length + 1, ...item }]);
    };

    const filteredItems = items.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filters.category ? item.category === filters.category : true;
        const matchesLocation = filters.location ? item.location === filters.location : true;
        const matchesPrice = filters.priceRange ? item.price <= parseFloat(filters.priceRange) : true;
        return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
    });

    return (
        <div style={styles.market}>
            <h2>Market Flund</h2>
            <div style={styles.search}>
                <input
                    type="text"
                    placeholder="Rechercher un objet..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                >
                    <option value="">Toutes les catégories</option>
                    <option value="Vêtements">Vêtements</option>
                    <option value="Électronique">Électronique</option>
                    <option value="Meubles">Meubles</option>
                </select>
                <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                >
                    <option value="">Toutes les localisations</option>
                    <option value="Paris">Paris</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Marseille">Marseille</option>
                </select>
                <input
                    type="number"
                    placeholder="Prix maximum (€)"
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                />
            </div>
            <div style={styles.items}>
                {filteredItems.map((item) => (
                    <div key={item.id} style={styles.item}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p><strong>Prix :</strong> {item.price} €</p>
                        <p><strong>Localisation :</strong> {item.location}</p>
                        <button>Acheter</button>
                        <button>Faire un don</button>
                    </div>
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const name = e.target.name.value;
                    const description = e.target.description.value;
                    const price = e.target.price.value;
                    const location = e.target.location.value;
                    const category = e.target.category.value;
                    if (name && description && price && location && category) {
                        addItem({ name, description, price, location, category });
                        e.target.reset();
                    }
                }}
            >
                <input name="name" placeholder="Nom de l'objet" required />
                <textarea name="description" placeholder="Description" required />
                <input name="price" type="number" placeholder="Prix (€)" required />
                <input name="location" placeholder="Localisation" required />
                <select name="category" required>
                    <option value="">Choisir une catégorie</option>
                    <option value="Vêtements">Vêtements</option>
                    <option value="Électronique">Électronique</option>
                    <option value="Meubles">Meubles</option>
                </select>
                <button type="submit">Ajouter un objet</button>
            </form>
        </div>
    );
};

const styles = {
    market: {
        padding: "1rem",
        maxWidth: "800px",
        margin: "0 auto",
    },
    search: {
        marginBottom: "1rem",
    },
    items: {
        marginTop: "1rem",
    },
    item: {
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
    },
};

export default Market;
