import styled from "styled-components";
import { colors } from "../../styles";
import lixeira from "../../assets/images/lixeira-de-reciclagem 1.svg";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 3;

  &.is-open {
    display: flex;
  }
`;

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.red};
  color: ${colors.red};
  padding: 32px 8px 0px 8px;
  z-index: 1;
`;

export const CartItem = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  padding: 8px;
  background-color: ${colors.straw};
  gap: 8px;
  margin-bottom: 16px;
  img {
    width: 80px;
    height: 80px;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    h3 {
      max-width: 140px;
      width: 100%;
      font-weight: 900;
      font-size: 18px;
    }

    p {
      max-width: 67px;
      width: 100%;
      font-weight: 400;
      font-size: 14px;
    }
    button {
      background-image: url(${lixeira});
      object-fit: cover;
      width: 16px;
      height: 16px;
      background-color: transparent;
      color: ${colors.red};
      border: none;
      position: absolute;
      bottom: 0px;
      left: 224px;
    }
  }
`;

export const Total = styled.div`
  max-width: 344px;
  width: 100%;
  color: ${colors.straw};
  font-weight: 700;
  font-size: 14px;
  margin-top: 40;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

export const CartButton = styled.button`
  max-width: 344px;
  width: 100%;
  height: 24px;
  background-color: ${colors.straw};
  color: ${colors.red};
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  border: none;
`;
