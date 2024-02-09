import { TechList } from "./TechList";
import styles from "./styles.module.scss";

export const TechSection = () => {
  return (
    <section id="tech" className={styles.tech__container}>
      <h2>Tecnologias</h2>
      <TechList />
    </section>
  );
};
