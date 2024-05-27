import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.div`
  width: 100%;
  height: 298px;
  background-color: ${colors.palha};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 56px;
  margin-top: 40px;
`;

export const MidiasContainer = styled.div`
  width: 88px;
  height: 24px;
  display: flex;
  gap: 8px;
  margin-top: 32.5px;
  img {
    max-width: 24px;
    height: 24px;
  }
`;

export const Texto = styled.p`
  width: 480px;
  margin-top: 80px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 10px;
  color: ${colors.vermelho};
  text-align: center;
`;
