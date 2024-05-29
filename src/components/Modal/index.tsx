import close from "../../assets/images/close.svg";
import { CloseButton, ModalContainer, ModalContent, ModalInfo } from "./style";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  nome?: string;
  descricao?: string;
  foto?: string;
  porcao?: string;
  preco?: number;
};

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const Modal = ({
  isVisible,
  onClose,
  nome,
  descricao,
  foto,
  porcao,
  preco,
}: Props) => {
  if (!isVisible) {
    return null;
  }
  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalContainer
      className={isVisible ? "visible" : ""}
      onClick={handleOutsideClick}
    >
      <ModalInfo>
        <img src={foto} alt="" />
        <CloseButton src={close} onClick={handleOutsideClick} />
        <ModalContent>
          <h3>{nome}</h3>
          <p>
            {descricao}
            <br />
            <br />
            <span>{porcao}</span>
          </p>
          <button>Adicionar ao carrinho - {formataPreco(preco)}</button>
        </ModalContent>
      </ModalInfo>
    </ModalContainer>
  );
};

export default Modal;
