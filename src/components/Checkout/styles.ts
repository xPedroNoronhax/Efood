import styled from "styled-components";

import { colors } from "../../styles";
import { CartButton } from "../Cart/styles";

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 344px;
  width: 100%;
  padding: 0px 8px 0px 8px;
  margin-top: 0;
  color: ${colors.branco};
  font-weight: 700;
  font-size: 14px;

  h3 {
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  label {
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 8px;
    height: 32px;
    border: none;
    padding: 8px;
    color: ${colors.preto};
    font-weight: 700;
    font-size: 14px;
  }

  small {
    min-height: 18px; 
  
  }

  div {
    display: flex;
    justify-content: space-between;
    div {
      max-width: 155px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  ${CartButton}:first-of-type {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 344px;
  width: 100%;
  padding: 0px 8px 0px 8px;
  margin-top: 0;
  color: ${colors.branco};
  font-weight: 700;
  font-size: 14px;

  h3 {
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  label {
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 8px;
    height: 32px;
    border: none;
    padding: 8px;
    color: ${colors.preto};
    font-weight: 700;
    font-size: 14px;
  }

  small {
    min-height: 18px; 
  
  }

  .infos {
    display: flex;
    justify-content: space-between;

    div:nth-of-type(1) {
      max-width: 228px;
      width: 100%;

      input {
        max-width: 228px;
        width: 100%;
        margin-top: 8px;
      }
    }
    div:nth-of-type(2) {
      max-width: 87px;
      width: 100%;
      input {
        max-width: 87px;
        width: 100%;
        margin-top: 8px;
      }
    }
  }

  .expiredInfos {
    display: flex;
    justify-content: space-between;
    gap: 34px;

    div {
      input {
        max-width: 155px;
        width: 100%;
        margin-top: 8px;
      }
    }
    margin-bottom: 24px;
  }
  ${CartButton} {
    margin-bottom: 8px;
  }
`;

export const Conclusion = styled.div`
  color: ${colors.palha};
  h3 {
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  div {
    max-width: 344px;
    width: 100%;
    margin-bottom: 24px;

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;
