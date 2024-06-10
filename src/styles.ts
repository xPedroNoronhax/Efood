import { createGlobalStyle } from "styled-components";

export const colors = {
  vermelho: "#E66767",
  palha: "#FFEBD9",
  palhabg: "#FFF8F2",
  branco: "#FFF",
  preto: "#4B4B4B",
};

export const breakpoints = {
  desktop: "1023px",
  tablet: "767px",
};

export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto',sans-serif;
        input:focus {
    outline: none;
}

button{
  cursor: pointer;
}
    }

    body{
        background-color: ${colors.palhabg};
    }

    li{
        list-style-type: none;
    }

    .container { 
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%
   
  }



    }
   
`;
