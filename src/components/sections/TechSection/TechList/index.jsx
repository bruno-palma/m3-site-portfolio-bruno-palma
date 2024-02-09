import { TechCard } from "./TechCard";
import styles from "./styles.module.scss";

export const TechList = () => {
  return (
    <ul className={styles.tech__list}>
      <TechCard />
    </ul>
  );
};
