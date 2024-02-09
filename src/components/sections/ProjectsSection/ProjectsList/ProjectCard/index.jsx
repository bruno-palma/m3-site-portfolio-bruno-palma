import { projects } from "../../../../../data/projects.js";
import GitHubIcon from "../../../../../assets/git-icon.png";
import styles from "./styles.module.scss";

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <li key={index} className={styles.project__card}>
            <div className={styles.card__info}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <button>Saiba mais</button>
            </div>
            <img src={GitHubIcon} alt="Logo GitHub" />
          </li>
        );
      })}
    </>
  );
};
