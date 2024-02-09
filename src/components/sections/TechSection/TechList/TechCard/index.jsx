import { technologies } from "../../../../../data/technologies.js";
import styles from "./styles.module.scss";

export const TechCard = () => {
  return (
    <>
      {technologies.map((tech, index) => (
        <li key={index} className={styles.tech__card}>
          <img src={tech.img} alt={` Logo ${tech.name} `} />
          <h3>{tech.name}</h3>
        </li>
      ))}
    </>
  );
};
