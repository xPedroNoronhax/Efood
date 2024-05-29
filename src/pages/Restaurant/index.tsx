import { useParams } from "react-router-dom";
import Header from "../../components/Header";

import Presentation from "../../components/Presentation";
import ProductsList from "../../components/ProductsList";
import { RestaurantOptions } from "../Home/index";
import { useEffect, useState } from "react";
const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantOptions>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, [id]);
  return (
    <>
      <Header />
      {restaurant && <Presentation restaurant={restaurant} />}
      {restaurant && <ProductsList products={restaurant.cardapio} />}
      
    </>
  );
};
export default Restaurant;
