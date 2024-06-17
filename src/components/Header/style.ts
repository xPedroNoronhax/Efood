import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
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
      width: 100%;
      height: 57.5px;
      margin-right: 193px;
      margin-left: 341px;
    }
    @media (max-width: ${breakpoints.desktop}) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      img {
        margin: 0;
        width: auto;
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-top: 10%;
      gap: 10px;
    }
  }
`;

export const CartItems = styled.a`
  max-width: 256px;
  width: 100%;
  text-align: right;
  color: ${colors.red};
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    text-align: center;
    max-width: 25%;
    font-size: 14px;
  }
`;

export const RestaurantLink = styled(Link)`
  max-width: 109px;
  text-align: center;
  color: ${colors.red};
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`;
