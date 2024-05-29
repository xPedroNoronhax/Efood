import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";


import { useEffect, useState } from "react";

export type MenuItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type RestaurantOptions = {
  map(arg0: (product: { cardapio: { id: import("react").Key | null | undefined; foto: string; nome: number; descricao: string; }; }) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa:string
  cardapio: MenuItem[];
};
const Home = () => {
  const [restaurantOptions, setRestaurantOptions] =
    useState<RestaurantOptions[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantOptions(res));
  }, []);
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantOptions} />
    </>
  );
};

export default Home;
