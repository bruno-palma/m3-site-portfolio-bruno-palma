import { TechCard } from "./TechCard";
import { technologies } from "../../../../data/technologies.js";
import styles from "./styles.module.scss";

export const TechList = () => {
  return (
    <ul className={styles.tech__list}>
      {technologies.map((tech, index) => {
        return (
          <TechCard 
            key={index} 
            name={tech.name} 
            img={tech.img} 
          />
        );
      })}
    </ul>
  );
};
