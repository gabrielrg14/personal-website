import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --highlight-color: #18a330;
        --dark-color: #161817;
        --light-color: #f7fcfe;

        --xs-size: 0.8rem;
        --sm-size: 1.2rem;
        --default-size: 1.6rem;
        --md-size: 1.8rem;
        --lg-size: 2.4rem;
        --xl-size: 3.2rem;
    }

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
        font-size: var(--default-size);
        color: var(--light-color);
        background-color: var(--dark-color);
        font-family: "League Spartan", "Montserrat", sans-serif;
        cursor: url("/images/cursor/default.cur"), default;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: var(--dark-color);
        border-radius: 0%;
    }

    ::-webkit-scrollbar-track-piece:hover {
        box-shadow: inset 0 1px 1px var(--light-color);
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100%;
        background-color: var(--dark-color);
        background-image: -webkit-linear-gradient(90deg, transparent, var(--highlight-color) 45%, var(--highlight-color) 45%, transparent);
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 0%;
    }

    ::selection {
        color: var(--highlight-color);
    }

    h1, h2, h3, h4, h5, h6, span, p, blockquote,
    pre, cite, code, small, strong, sub, sup,
    b, u, i, dl, dt, dd, fieldset, label, legend,
    caption, th, td, article {
        cursor: url("/images/cursor/text.cur"), text;
    }

    a, button {
        color: var(--light-color);
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
