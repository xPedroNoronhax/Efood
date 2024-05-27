import {
  AddToCartButton,
  Card,
  ProductDescription,
  ProductImage,
  ProductName,
} from "./style";
import marguerita from "../../assets/images/marguerita.png";
const Product = () => (
  <Card>
    <ProductImage src={marguerita} />
    <ProductName>Pizza Marguerita</ProductName>
    <ProductDescription>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </ProductDescription>
    <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
  </Card>
);
export default Product;
