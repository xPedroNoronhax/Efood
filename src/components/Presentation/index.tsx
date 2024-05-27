import { Imagem, RestaurantName, RestaurantType } from "./style";
import italiana from "../../assets/images/italiana.png";

const Presentation = () => (
  <Imagem style={{ backgroundImage: `url(${italiana})` }}>
    <div className="container">
      <RestaurantType>Italiana</RestaurantType>
      <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
    </div>
  </Imagem>
);
export default Presentation;
