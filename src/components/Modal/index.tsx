import { useDispatch } from "react-redux";
import close from "../../assets/images/close.svg";
import { CloseButton, ModalContainer, ModalContent, ModalInfo } from "./style";
import { add, open } from "../../store/reducers/cart";
import { MenuItem } from "../../pages/Home";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  item: MenuItem | null;
};

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const Modal = ({ isVisible, onClose, item }: Props) => {
  const dispatch = useDispatch();
  if (!isVisible || !item) {
    return null;
  }

  const addToCart = () => {
    dispatch(add(item));
    dispatch(open());
  };

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    addToCart();
    handleOutsideClick(
      e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>
    );
  };

  return (
    <ModalContainer
      className={isVisible ? "visible" : ""}
      onClick={handleOutsideClick}
    >
      <ModalInfo>
        <img src={item.foto} alt="" />
        <CloseButton src={close} onClick={handleOutsideClick} />
        <ModalContent>
          <h3>{item.nome}</h3>
          <p>
            {item.descricao}
            <br />
            <br />
            <span>{item.porcao}</span>
          </p>
          <button onClick={handleButtonClick}>
            Adicionar ao carrinho - {formataPreco(item.preco)}
          </button>
        </ModalContent>
      </ModalInfo>
    </ModalContainer>
  );
};

export default Modal;
