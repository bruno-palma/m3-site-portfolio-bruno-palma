import styles from "./styles.module.scss";

export const TechCard = ({ name, img }) => {
  return (
    <li className={styles.tech__card}>
      <img src={img} alt={` Logo ${name} `} />
      <h3>{name}</h3>
    </li>
  );
};
