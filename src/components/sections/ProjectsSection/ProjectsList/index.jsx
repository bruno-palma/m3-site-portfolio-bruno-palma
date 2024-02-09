import { ProjectCard } from "./ProjectCard";
import styles from "./styles.module.scss";

export const ProjectsList = () => {
  return (
    <ul className={styles.projects__list}>
      <ProjectCard />
    </ul>
  );
};
