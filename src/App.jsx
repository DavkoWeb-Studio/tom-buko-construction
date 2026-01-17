import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Together from "./components/Together";
import StatsCounter from "./components/StatsCounter";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsCounter />
      <About />
      <Together />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}