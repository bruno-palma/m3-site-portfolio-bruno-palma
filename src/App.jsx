import { DefaulTemplate } from "./components/DefaulTemplate";
import { BannerSection } from "./components/sections/BannerSection";
import { AboutMeSection } from "./components/sections/AboutMeSection";
import { TechSection } from "./components/sections/TechSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import "./styles/index.css";

function App() {
  return (
    <DefaulTemplate>
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
    </DefaulTemplate>
  );
}

export default App;
