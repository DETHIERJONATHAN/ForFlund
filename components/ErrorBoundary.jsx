import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Erreur captur�e :", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Quelque chose s'est mal pass�.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
