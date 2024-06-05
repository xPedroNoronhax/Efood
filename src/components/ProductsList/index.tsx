import { useState } from "react";
import Modal from "../Modal";
import Product from "../Product";
import { Container } from "./styled";
import { MenuItem } from "../../pages/Home";

const ProductsList = ({ products }: { products: MenuItem[] }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const handleProductClick = (product: MenuItem) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };
  return (
    <div>
      <Container>
        {products.map((product) => (
          <Product
            onClick={() => handleProductClick(product)}
            key={product.id}
            foto={product.foto}
            nome={product.nome}
            descricao={product.descricao}
          />
        ))}
      </Container>
      <Modal
        item={selectedProduct}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        {...selectedProduct}
      />
    </div>
  );
};

export default ProductsList;
