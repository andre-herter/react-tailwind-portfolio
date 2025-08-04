import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/projectsSection/ProjectSection";

function App() {
  return (
    <div className="container mx-auto text-left mt-20 lg:mt-32 px-6">
      <HeroSection />
      <ProjectSection />
    </div>
  );
}

export default App;
