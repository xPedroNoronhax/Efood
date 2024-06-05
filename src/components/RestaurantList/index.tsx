import { RestaurantOptions } from "../../pages/Home";
import Restaurant from "../Restaurant";
import { Container } from "./style";

type Props = {
  restaurants: RestaurantOptions[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
        avaliacao={restaurant.avaliacao}
        descricao={restaurant.descricao}
        capa={restaurant.capa}
        destacado={restaurant.destacado}
        id={restaurant.id}
      />
    ))}
  </Container>
);

export default RestaurantList;
