import { ProjectsList } from "./ProjectsList";
import styles from "./styles.module.scss";

export const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects__container}>
      <h2>Projetos</h2>
      <ProjectsList />
    </section>
  );
};
