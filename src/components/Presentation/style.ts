import styled from "styled-components";
import { colors } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    height: 280px;
    padding-top: 24px;
    padding-bottom: 32px;
    justify-content: space-between;
  }
`;

export const RestaurantType = styled.h3`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.branco};
  width: 100%;
  max-width: 101px;
`;

export const RestaurantName = styled.h2`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.branco};
  width: 100%;
  max-width: 676px;
`;
