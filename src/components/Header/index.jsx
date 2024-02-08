import LogoPort from "../../assets/portfolio.png";

export const Header = () => {
  return (
    <header>
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
