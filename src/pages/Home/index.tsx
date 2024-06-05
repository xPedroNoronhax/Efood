import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import { useGetFeaturedRestaurantQuery } from "../../services/api";

export type MenuItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type RestaurantOptions = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
};

const Home = () => {
  const { data: restaurantOptions, error, isLoading } = useGetFeaturedRestaurantQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load data</p>;

  return (
    <>
      <Hero />
      {restaurantOptions && <RestaurantList restaurants={restaurantOptions} />}
    </>
  );
};

export default Home;
