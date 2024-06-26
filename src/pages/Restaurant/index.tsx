import { useParams } from "react-router-dom";
import Header from "../../components/Header";

import Presentation from "../../components/Presentation";
import ProductsList from "../../components/ProductsList";

import { useGetRestaurantIdQuery } from "../../services/api";
import Loader from "../../components/Loader";
const Restaurant = () => {
  const { id } = useParams();
  const { data: restaurant, error, isLoading } = useGetRestaurantIdQuery(id!);

  if (isLoading) return <Loader />;
  if (error) return <p>Failed to load restaurant data</p>;
  return (
    <>
      <Header />
      {restaurant && <Presentation restaurant={restaurant} />}
      {restaurant && <ProductsList products={restaurant.cardapio} />}
    </>
  );
};
export default Restaurant;
