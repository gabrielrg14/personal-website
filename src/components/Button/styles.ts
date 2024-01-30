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
        fontSize: "1.8rem",
        padding: "0.8rem 1.6rem"
    },
    medium: {
        fontSize: "1.9rem",
        padding: "1.2rem 2.4rem"
    },
    large: {
        fontSize: "2rem",
        padding: "1.6rem 3.2rem"
    }
}

export const Button = styled.button<ButtonProps>`
    line-height: normal;
    text-align: center;
    transition: all 0.5s ease;
    border-radius: ${({ rounded }) => (rounded ? "24px" : "8px")};
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
