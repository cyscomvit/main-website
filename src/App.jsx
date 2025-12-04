import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PastEvents from "./components/PastEvents";
import ScrollToTop from "./components/ScrollToTop";
import { StickyScrollRevealDemo } from "./components/sticky_scroll";
// Then in your component's render method:

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden scroll-smooth">
      <NavBar />
      <Hero />
      <About />
      <div className="relative">
        <Features />
        <Story />
        <StickyScrollRevealDemo />
        <PastEvents />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}

export default App;
