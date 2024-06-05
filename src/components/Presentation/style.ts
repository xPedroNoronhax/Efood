import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    height: 280px;
    padding-top: 24px;
    padding-bottom: 32px;
    justify-content: space-between;
    position: relative;
    z-index: 2;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
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
