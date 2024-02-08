import { Header } from "./components/Header";
import { BannerSection } from "./components/sections/BannerSection";
import { AboutMeSection } from "./components/sections/AboutMeSection";
import { TechSection } from "./components/sections/TechSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { Footer } from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
