import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages/Home"
import Product from "./pages/Product";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
    return (
        <Router>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/product/:id" element={<Product/>} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
