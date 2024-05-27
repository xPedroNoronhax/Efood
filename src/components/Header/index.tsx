import herobg from "../../assets/images/herobg.png";
import logo from "../../assets/images/logo.png";

import { CartItems, Imagem, RestaurantLink } from "./style";

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${herobg})` }}>
    <nav className="container">
      <RestaurantLink to="/">Restaurantes</RestaurantLink>
      <img src={logo} alt="logo" />
      <CartItems href="#">0 produto(s) no carrinho</CartItems>
    </nav>
  </Imagem>
);

export default Header;
