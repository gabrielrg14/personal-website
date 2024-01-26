import styled from "styled-components"

type ButtonProps = {
    variant: "primary" | "secondary"
    size: "small" | "medium" | "large"
    rounded: boolean
    children: React.ReactNode
}

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    border-radius: ${(props) => (props.rounded ? "1.5rem" : "0.5rem")};
    background-color: ${(props) =>
        props.variant === "primary" ? "#18a330" : "#f7fcfe"};
    color: ${(props) => (props.variant === "primary" ? "#f7fcfe" : "#161817")};
    font-family: inherit;
    font-size: ${(props) =>
        props.size === "small"
            ? "1.1rem"
            : props.size === "medium"
              ? "1.2rem"
              : "1.3rem"};
    padding: ${(props) =>
        props.size === "small"
            ? "0.5rem 1rem"
            : props.size === "medium"
              ? "0.75rem 1.5rem"
              : "1rem 2rem"};
    line-height: normal;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
    transition: all 0.3s ease;

    :hover {
        background-color: ${(props) =>
            props.variant === "primary" ? "#f7fcfe" : "#18a330"};
        color: ${(props) =>
            props.variant === "primary" ? "#18a330" : "#f7fcfe"};
    }
`
