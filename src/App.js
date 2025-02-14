import React from "react";
import PublicationHub from "./components/PublicationHub";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>For Flund</h1>
            <div className="three-column-layout">
                <div className="left-column">
                    {/* Colonne gauche (par exemple, menu ou informations) */}
                </div>
                <div className="center-column">
                    <PublicationHub />
                </div>
                <div className="right-column">
                    {/* Colonne droite (par exemple, Messenger) */}
                </div>
            </div>
        </div>
    );
}

export default App;
