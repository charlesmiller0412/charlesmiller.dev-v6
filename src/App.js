import "./Sass/App.scss";
import Home from "./Components/home";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import MobileNav from "./Components/mobileNav";
import Sidebar from "./Components/sidebar";

function App() {
    return (
        <main className="App">
            <Home />
            <Sidebar />
            <Navbar />
            <MobileNav />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
