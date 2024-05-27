import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import Restaurants from "../../models/Restaurant";
import sushi from "../../assets/images/sushi.png";
import macarrao from "../../assets/images/macarrao.png";

const options: Restaurants[] = [
  {
    id: 1,
    infos: ["Destaque da semana", "Japonesa"],
    name: "Hioki Sushi",
    grade: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: sushi,
  },
  {
    id: 2,
    infos: ["Destaque da semana", "Italiana"],
    name: "La Dolce Vita Trattoria",
    grade: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
  },
  {
    id: 2,
    infos: ["Destaque da semana", "Italiana"],
    name: "La Dolce Vita Trattoria",
    grade: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
  },
  {
    id: 2,
    infos: ["Destaque da semana", "Italiana"],
    name: "La Dolce Vita Trattoria",
    grade: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
  },
  {
    id: 2,
    infos: ["Destaque da semana", "Italiana"],
    name: "La Dolce Vita Trattoria",
    grade: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
  },
  {
    id: 2,
    infos: ["Destaque da semana", "Italiana"],
    name: "La Dolce Vita Trattoria",
    grade: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: macarrao,
  },
];
const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurants={options} />
  </>
);

export default Home;
