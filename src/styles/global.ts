import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    html {
        line-height: 1;
        cursor: url("/images/cursor/pointer.cur"), pointer;
    }

    body {
        cursor: url("/images/cursor/default.cur"), default;
    }

    body {
        height: 100%;
        background-color: #161817;
        color: #f7fcfe;
        font: inherit;
        vertical-align: baseline;
        font-family: "League Spartan", "Montserrat", sans-serif;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: #161817;
        border-radius: 0%;
    }

    ::-webkit-scrollbar-track-piece:hover {
        box-shadow: inset 0 1px 1px #f7fcfe;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100%;
        background-color: #161817;
        background-image: -webkit-linear-gradient(90deg, transparent, #18a330 45%, #18a330 45%, transparent);
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 0%;
    }

    ::selection {
        color: #18a330;
    }

    h1, h2, h3, h4, h5, h6, span, p, blockquote,
    pre, cite, code, small, strong, sub, sup,
    b, u, i, dl, dt, dd, fieldset, label, legend,
    caption, th, td, article {
        cursor: url("/images/cursor/text.cur"), text;
    }

    a, button {
        cursor: url("/images/cursor/pointer.cur"), pointer;
    }

    ol, ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #f7fcfe;
    }

    a:hover {
        transition: 0.5s ease-out;
    }

    .btn-default {
        border-radius: 2rem;
        padding: 0.75rem 1.75rem;
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

    @keyframes appear-on-screen {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`
