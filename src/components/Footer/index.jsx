import WhatsIcon from "../../assets/whatsapp-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import GitIcon from "../../assets/github-icon.png";
import { user } from "../../data/user";

export const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Contato</h2>
        <div>
          <img src={WhatsIcon} alt="Logo WhatsApp" />
          <img src={LinkedinIcon} alt="Logo Linkedin" />
          <img src={GitIcon} alt="Logo GitHub" />
        </div>
      </div>
      <p>{` Todos os direitos reservados - ${user} `}</p>
    </footer>
  );
};
