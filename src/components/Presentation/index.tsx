import { Imagem, RestaurantName, RestaurantType } from "./style";

import { RestaurantOptions } from "../../pages/Home";

type Props = {
  restaurant: RestaurantOptions;
};

const Presentation = ({ restaurant }: Props) => (
  <Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <RestaurantType>{restaurant.tipo}</RestaurantType>
      <RestaurantName>{restaurant.titulo}</RestaurantName>
    </div>
  </Imagem>
);
export default Presentation;
