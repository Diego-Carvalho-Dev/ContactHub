import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    color: white;
    font-family: 'Inter', sans-serif;

      
}

a{
    text-decoration:none;
}
ul, ol, li{
    list-style-type: style none;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}

body{
    background: #1B1F27;

    
}

`;
