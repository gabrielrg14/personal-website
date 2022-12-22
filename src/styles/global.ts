import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    body {
        height: 100%;
        background-color: #161817;
        color: #f7fcfe;
        line-height: 1;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: "League Spartan", "Montserrat", sans-serif;
    }

    body::-webkit-scrollbar {
        width: 15px;
    }
    
    body::-webkit-scrollbar-track {
        background-color: #f7fcfe;
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: #161817;
        border-radius: 15px;
        border: 2px solid #f7fcfe;
    }

    ::selection {
        color: #18a330;
    }

    ol, ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #f7fcfe;
    }
    
    a:hover {
        transition: 0.5 ease-out;
        text-decoration: 3px underline #18a330;
    }
    
    .btn-default {
        border-radius: 30px;
        padding: 10px 30px;
        display: inline-block;
        background-color: #f7fcfe;
        color: #161817;
        font-size: 1.2rem;
        text-decoration: none;
        vertical-align: middle;
        text-align: center;
        transition: all .3s ease;
    }
    
    .btn-default:hover {
        background-color: #18a330;
        color: #f7fcfe;
    }
`;

export default GlobalStyle;