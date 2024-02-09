import BannerImg from "../../../assets/banner-img.png";
import { username } from "../../../data/user.js";
import styles from "./styles.module.scss";

export const BannerSection = () => {
  return (
    <section className={styles.banner__container}>
      <div>
        <div>
          <p>{username}</p>
          <h1>Bem vindo ao meu portfólio</h1>
        </div>
        <p>Uma frase interessante sobre mim...</p>
        <button className="button-default">Saiba mais</button>
      </div>
      <img src={BannerImg} alt="Imagem de Computador em Vetor" />
    </section>
  );
};
