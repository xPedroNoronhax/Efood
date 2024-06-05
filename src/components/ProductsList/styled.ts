import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.section`
  max-width: 1024px;
  margin: 56px auto 120px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 20px 8px;
    column-gap: 0px;
    row-gap: 24px;
  }
`;
