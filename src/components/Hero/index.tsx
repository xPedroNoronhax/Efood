import { Imagem } from "./style";
import heroBg from "../../assets/images/herobg.png";
import logo from "../../assets/images/logo.png";

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${heroBg})` }}>
    <div className="container">
      <img src={logo} alt="logo efood" />
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </div>
  </Imagem>
);

export default Hero;
