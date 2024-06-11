import {
  CartButton,
  CartContainer,
  CartItem,
  Overlay,
  SideBar,
  Total,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove, showDeliveryForm } from "../../store/reducers/cart";
import Checkout from "../Checkout";

const Cart = () => {
  const { isOpen, items, total, cartStep } = useSelector(
    (state: RootReducer) => state.cart
  );

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const goToForm = () => {
    if (total > 0) {
      dispatch(showDeliveryForm());
    } else {
      alert("Não há itens no carrinho!");
    }
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {cartStep ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                    <button onClick={() => removeItem(item.id)} />
                  </div>
                </CartItem>
              ))}
            </ul>
            <Total>
              <p>Valor total</p>
              <p>{formataPreco(total)}</p>
            </Total>
            <CartButton onClick={goToForm}>Continuar com a entrega</CartButton>
          </>
        ) : (
          <Checkout />
        )}
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
