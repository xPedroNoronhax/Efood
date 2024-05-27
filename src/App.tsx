import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Presentation from "./components/Presentation";
// import ProductsList from "./components/ProductsList";


import { GlobalCss } from "./styles";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
