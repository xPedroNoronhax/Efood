import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Infos = styled.div<{ isSingleInfo: boolean }>`
  display: flex;
  gap: 8px;
  ${({ isSingleInfo }) =>
    isSingleInfo
      ? `
      position: absolute;
      top: 16px;
      right: 16px;  // Alterado de left para right
      margin-left: 395px;
      margin-bottom: 175px;
    `
      : `
      position: absolute;
      top: 16px;
      right: 16px;  // Alterado de left para right
    `}
`;

export const Card = styled.div`
  max-width: 472px;
  background-color: ${colors.branco};
  border: 1px solid ${colors.vermelho};
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    height: 218px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 362px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 300px;
  }
`;

export const NameRating = styled.div`
  margin: 7px 8px 16px 8px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.vermelho};

  img {
    width: 20px;
    height: 20px;
  }
  div {
    display: flex;
    gap: 8px;
  }
`;

export const Description = styled.p`
  width: 456px;
  font-weight: 400;
  font-size: 14px;
  color: ${colors.vermelho};
  margin-right: 8px;
  margin-left: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 16px;
`;
