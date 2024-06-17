// style.js
import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ModalContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;

  &.visible {
    display: flex;
  }
`;

export const ModalInfo = styled.div`
  position: relative;
  max-width: 1024px;

  width: 100%;
  background-color: ${colors.red};
  color: ${colors.white};
  display: flex;
  padding: 32px;
  gap: 24px;

  img {
    max-width: 280px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    flex-direction: column;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }
  p {
    max-width: 656px;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 16px;
  }

  button {
    height: 24px;
    background-color: ${colors.white};
    font-weight: 700;
    font-size: 14px;
    color: ${colors.red};
    max-width: 218px;
    text-align: center;
    margin-bottom: 27px;
    border: none;
    @media (max-width: ${breakpoints.tablet}) {
      height: 40px;
    }
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  max-width: 16px;
  height: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    top: 8px;
    right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    top: 8px;
    right: 8px;
  }
`;
