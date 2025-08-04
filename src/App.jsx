import "./App.css";
import HeroSection from "./components/heroSection/HeroSection";
import ProjectSection from "./components/projectsSection/ProjectSection";
import ContactSection from "./components/contactSection/ContactSection";

function App() {
  return (
    <>
      <div className="container mx-auto text-left mt-20 lg:mt-32 px-6">
        <HeroSection />
        <ProjectSection />
      </div>
      <ContactSection />
    </>
  );
}

export default App;
