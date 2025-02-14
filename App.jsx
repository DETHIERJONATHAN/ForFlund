import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import PublicationForm from "./components/PublicationForm";
import Flund from "./pages/Flund";
import Market from "./pages/Market";
import Troc from "./pages/Troc";
import Jobs from "./pages/Jobs";
import Events from "./pages/Events";
import FlundAI from "./pages/FlundAI";
import FlundCoins from "./pages/FlundCoins";
import FlundSpaces from "./pages/FlundSpaces";
import FlundTV from "./pages/FlundTV";
import FlundAcademy from "./pages/FlundAcademy";
import "./styles/global.css";

const App = () => {
    const [activeApp, setActiveApp] = useState("flund");
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [clickStartTime, setClickStartTime] = useState(0);

    const apps = {
        flund: { name: "Flund", component: <Flund /> },
        market: { name: "Market Flund", component: <Market /> },
        troc: { name: "Troc Flund", component: <Troc /> },
        jobs: { name: "Jobs Flund", component: <Jobs /> },
        events: { name: "Évents Flund", component: <Events /> },
        flundAI: { name: "Flund AI", component: <FlundAI /> },
        flundCoins: { name: "Flund Coins", component: <FlundCoins /> },
        flundSpaces: { name: "Flund Spaces", component: <FlundSpaces /> },
        flundTV: { name: "Flund TV", component: <FlundTV /> },
        flundAcademy: { name: "Flund Academy", component: <FlundAcademy /> },
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setClickStartTime(Date.now());
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaTime = Date.now() - clickStartTime;

        // Si le mouvement est assez rapide (moins de 300ms) et assez long (plus de 100px)
        if (deltaTime < 300 && Math.abs(deltaX) > 100) {
            const appKeys = Object.keys(apps);
            const currentIndex = appKeys.indexOf(activeApp);
            
            if (deltaX > 0) {
                // Swipe vers la droite
                const prevApp = appKeys[(currentIndex - 1 + appKeys.length) % appKeys.length];
                setActiveApp(prevApp);
            } else {
                // Swipe vers la gauche
                const nextApp = appKeys[(currentIndex + 1) % appKeys.length];
                setActiveApp(nextApp);
            }
            
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            const appKeys = Object.keys(apps);
            const currentIndex = appKeys.indexOf(activeApp);
            const nextApp = appKeys[(currentIndex + 1) % appKeys.length];
            setActiveApp(nextApp);
        },
        onSwipedRight: () => {
            const appKeys = Object.keys(apps);
            const currentIndex = appKeys.indexOf(activeApp);
            const prevApp = appKeys[(currentIndex - 1 + appKeys.length) % appKeys.length];
            setActiveApp(prevApp);
        },
        trackMouse: true,
        preventDefaultTouchmoveEvent: true,
    });

    return (
        <Router>
            <div className="web-container">
                <LeftColumn />
                <div 
                    className="center-column" 
                    {...handlers}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <PublicationForm />
                    <Routes>
                        <Route path="/" element={apps[activeApp].component} />
                    </Routes>
                </div>
                <RightColumn />
            </div>
        </Router>
    );
};

export default App;
