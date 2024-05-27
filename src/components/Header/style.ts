import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;

  .container {
    max-width: 1024px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 65px;

    img {
      max-width: 125px;
      height: 57.5px;
      margin-right: 193px;
      margin-left: 341px;
    }
  }
`;

export const CartItems = styled.a`
  max-width: 256px;
  width: 100%;
  text-align: right;
  color: ${colors.vermelho};
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`;

export const RestaurantLink = styled(Link)`
  max-width: 109px;
  text-align: center;
  color: ${colors.vermelho};
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`;
