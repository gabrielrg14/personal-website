import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    html, body, #__next {
        height: 100%;
    }

    html {
        font-size: 62.5%;
        line-height: 1;
        cursor: url("/images/cursor/pointer.cur"), pointer;
    }

    body {
        font-size: 1.6rem;
        color: #f7fcfe;
        background-color: #161817;
        font-family: "League Spartan", "Montserrat", sans-serif;
        cursor: url("/images/cursor/default.cur"), default;
    }

    ::-webkit-scrollbar {
        width: 8px;
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
        color: #f7fcfe;
        text-decoration: none;
        font-family: inherit;
        cursor: url("/images/cursor/pointer.cur"), pointer;
    }

    ol, ul, li {
        list-style: none;
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
