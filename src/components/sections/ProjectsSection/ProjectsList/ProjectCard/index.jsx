import GitHubIcon from "../../../../../assets/git-icon.png";
import styles from "./styles.module.scss";

export const ProjectCard = ({ name, description }) => {
  return (
    <li className={styles.project__card}>
      <div className={styles.card__info}>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <button>Saiba mais</button>
      </div>
      <img src={GitHubIcon} alt="Logo GitHub" />
    </li>
  );
};
