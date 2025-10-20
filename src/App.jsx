import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PastEvents from "./components/PastEvents";
import { StickyScrollRevealDemo } from "./components/sticky_scroll";
// Then in your component's render method:

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <StickyScrollRevealDemo />
      <PastEvents />
      <Contact />
      <Footer />
     
    </main>
  );
}

export default App;
