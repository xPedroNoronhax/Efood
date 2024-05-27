import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  max-width: 472px;
  height: 398px;
  background-color: ${colors.branco};
  border: 1px solid ${colors.vermelho};
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    height: 218px;
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
`;

interface InfosProps {
  isSingleInfo: boolean;
}

export const Infos = styled.div<InfosProps>`
  display: flex;
  gap: 8px;
  ${({ isSingleInfo }) =>
    isSingleInfo
      ? `
      position: absolute;
      top: 16px;
      left: 16px;
      margin-left: 395px;
      margin-bottom: 175px;
    `
      : `
      position: absolute;
      top: 16px;
      left: 266px;
    `}
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-left: 8px;
  margin-bottom: 8px;
`;
