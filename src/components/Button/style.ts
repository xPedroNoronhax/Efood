import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";
export const ButtonContainer = styled.button`
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: ${colors.palha};
  background-color: ${colors.vermelho};
  padding: 6px 4px;
  border: none;
`;

export const ButtonLink = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: ${colors.palha};
  background-color: ${colors.vermelho};
  padding: 6px 4px;
  border: none;
  text-decoration: none;
`;

