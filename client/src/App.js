import React from "react";
import "./Sass/App.scss";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navigation/Navbar";
import Projects from "./Components/Projects/Projects";
import MobileNav from "./Components/Navigation/MobileNav";
import Overlay from "./Components/Navigation/Overlay";

export default function App() {
    return (
        <>
            <main className="App">
                <Navbar />
                <Home />
                <Projects />
                <About />
                <Contact />
                <Footer />
                <MobileNav />
                <Overlay />
            </main>
        </>
    );
}
