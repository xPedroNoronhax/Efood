import { FooterContainer, Logo, MidiasContainer, Texto } from "./style";

import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter.svg";
import insta from "../../assets/images/insta.svg";
import face from "../../assets/images/face.svg";
const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="logo" />
      <MidiasContainer>
        <img src={insta} alt="" />
        <img src={face} alt="" />
        <img src={twitter} alt="" />
      </MidiasContainer>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Texto>
    </div>
  </FooterContainer>
);

export default Footer;
