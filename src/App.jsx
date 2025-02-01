import "./index.css";

import About from "./Components/About";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import GoToTop from "./Components/GoToTop";

// Root Component

function App() {
  return (
    <div
      className="bg-[#fafaf9] dark:bg-[#09090b] min-h-screen pt-32 
    md:pt-52 transition-colors duration-300"
    >
      <Header />
      <Showcase />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
