import styled from "styled-components"

type ButtonProps = {
    variant: "primary" | "secondary"
    size: "small" | "medium" | "large"
    rounded: boolean
    children: React.ReactNode
}

const variants = {
    primary: {
        backgroundColor: "#18a330",
        color: "#f7fcfe",
        hover: {
            backgroundColor: "#f7fcfe",
            color: "#18a330"
        }
    },
    secondary: {
        backgroundColor: "#f7fcfe",
        color: "#161817",
        hover: {
            backgroundColor: "#18a330",
            color: "#f7fcfe"
        }
    }
}

const sizes = {
    small: {
        fontSize: "1.1rem",
        padding: "0.5rem 1rem"
    },
    medium: {
        fontSize: "1.2rem",
        padding: "0.75rem 1.5rem"
    },
    large: {
        fontSize: "1.3rem",
        padding: "1rem 2rem"
    }
}

export const Button = styled.button<ButtonProps>`
    line-height: normal;
    text-align: center;
    transition: all 0.5s ease;
    border-radius: ${({ rounded }) => (rounded ? "1.5rem" : "0.5rem")};
    background-color: ${({ variant }) => variants[variant].backgroundColor};
    color: ${({ variant }) => variants[variant].color};
    font-size: ${({ size }) => sizes[size].fontSize};
    padding: ${({ size }) => sizes[size].padding};

    :hover {
        background-color: ${({ variant }) =>
            variants[variant].hover.backgroundColor};
        color: ${({ variant }) => variants[variant].hover.color};
    }
`
