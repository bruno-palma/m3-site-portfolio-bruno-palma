import { DefaultTemplate } from "./components/DefaultTemplate";
import { BannerSection } from "./components/sections/BannerSection";
import { AboutMeSection } from "./components/sections/AboutMeSection";
import { TechSection } from "./components/sections/TechSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import "./styles/index.scss";

function App() {
  return (
    <DefaultTemplate>
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectsSection />
    </DefaultTemplate>
  );
}

export default App;
