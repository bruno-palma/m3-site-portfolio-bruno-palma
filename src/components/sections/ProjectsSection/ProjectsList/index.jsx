import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../../data/projects.js";
import styles from "./styles.module.scss";

export const ProjectsList = () => {
  return (
    <ul className={styles.projects__list}>
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
          />
        );
      })}
    </ul>
  );
};
