import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {  
        box-sizing: border-box;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        padding: 0;
        font-weight: bold;
        
    }

    body {
        background-color: #111111;
    }

    ::-webkit-scrollbar {
    width: 0px;
    }

`