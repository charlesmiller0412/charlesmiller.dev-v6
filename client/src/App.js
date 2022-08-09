import { useState, useEffect } from "react";
import "./Sass/App.scss";
import LoadingScreen from "./Components/Loading";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navigation/Navbar";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import MobileNav from "./Components/Navigation/MobileNav";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3500);
    });
    return (
        <>
            {loading === false ? (
                <main className="App">
                    <Navbar />
                    <Home />
                    <Projects />
                    <About />
                    <Contact />
                    <Footer />
                    <MobileNav />
                </main>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}
