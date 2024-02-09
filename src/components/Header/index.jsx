import LogoPort from "../../assets/portfolio.png";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={LogoPort} alt="Logo Portfólio" />
      <div>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#tech">Stack</a>
          <a href="#projects">Projetos</a>
        </nav>
      </div>
      <button className="button-default">Contato</button>
    </header>
  );
};
