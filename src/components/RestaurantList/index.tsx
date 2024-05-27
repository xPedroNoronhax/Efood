import Restaurants from "../../models/Restaurant";
import Restaurant from "../Restaurant";
import { Container } from "./style";

type Props = {
  restaurants: Restaurants[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    {restaurants.map((restaurant, index) => {
      const infos = index === 0 ? restaurant.infos : ["Italiana"];
      return (
        <Restaurant
          key={restaurant.id}
          infos={infos}
          name={restaurant.name}
          grade={restaurant.grade}
          description={restaurant.description}
          image={restaurant.image}
        />
      );
    })}
  </Container>
);
export default RestaurantList;
