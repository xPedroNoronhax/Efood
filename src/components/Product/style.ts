import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  width: 100%;
  max-width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;

  background-color: ${colors.vermelho};

  gap: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 304px;
  height: 167px;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  width: 100%;

  font-weight: 900;
  font-size: 16px;
  color: ${colors.palha};
`;

export const ProductDescription = styled.p`
  width: 100%;
  max-width: 304px;
  font-weight: 400;
  font-size: 14px;
  color: ${colors.palha};
`;

export const AddToCartButton = styled.button`
  width: 100%;
  max-width: 304px;
  height: 24px;
  background-color: ${colors.palha};

  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.vermelho};
  border: none;
`;
