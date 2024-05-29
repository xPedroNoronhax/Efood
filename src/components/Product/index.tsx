import {
  AddToCartButton,
  Card,
  ProductDescription,
  ProductImage,
  ProductName,
} from "./style";

type Props = {
  onClick: () => void;
  foto: string;
  nome: string;
  descricao: string;
};

const Product = ({ onClick, foto, nome, descricao }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 125) {
      return descricao.slice(0, 123) + "...";
    }
    return descricao;
  };
  return (
    <Card onClick={onClick}>
      <ProductImage src={foto} />
      <ProductName>{nome}</ProductName>
      <ProductDescription>{getDescricao(descricao)}</ProductDescription>
      <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
    </Card>
  );
};
export default Product;
