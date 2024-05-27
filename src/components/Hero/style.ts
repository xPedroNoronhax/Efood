import styled from "styled-components";
import { colors } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  

  .container {
    display: flex;
    height: 384px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      height: 60px;
      width: 125px;
      margin-top: 40px;
    }

    h2 {
      max-width: 539px;
      font-weight: 900;
      font-size: 36px;
      color: ${colors.vermelho};
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;
