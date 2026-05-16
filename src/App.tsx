import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <main className="overflow-x-hidden antialised text-neutral-800">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
