import herobg from "../../assets/images/herobg.png";
import logo from "../../assets/images/logo.png";

import { CartItems, Imagem, RestaurantLink } from "./style";
import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const openCart = () => {
    dispatch(open());
  };

  return (
    <Imagem style={{ backgroundImage: `url(${herobg})` }}>
      <nav className="container">
        <RestaurantLink to="/">Restaurantes</RestaurantLink>
        <img src={logo} alt="logo" />
        <CartItems onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartItems>
      </nav>
    </Imagem>
  );
};

export default Header;
