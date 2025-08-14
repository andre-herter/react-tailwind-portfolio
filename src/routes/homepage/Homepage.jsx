import ContactSection from "../../components/contactSection/ContactSection";
import HeroSection from "../../components/heroSection/HeroSection";
import ProjectSection from "../../components/projectsSection/ProjectSection";

function Home() {
  return (
    <>
      <div className="container mx-auto text-left mt-20 lg:mt-20 px-10">
        <HeroSection />
        <ProjectSection />
      </div>
      <ContactSection />
    </>
  );
}

export default Home;
