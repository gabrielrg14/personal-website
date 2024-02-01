import styled from "styled-components"

type ButtonProps = {
    variant: "primary" | "secondary"
    size: "small" | "medium" | "large"
    rounded: boolean
    children: React.ReactNode
}

const variants = {
    primary: {
        backgroundColor: "var(--highlight-color)",
        color: "var(--light-color)",
        hover: {
            backgroundColor: "var(--light-color)",
            color: "var(--highlight-color)"
        }
    },
    secondary: {
        backgroundColor: "var(--light-color)",
        color: "var(--dark-color)",
        hover: {
            backgroundColor: "var(--highlight-color)",
            color: "var(--light-color)"
        }
    }
}

const sizes = {
    small: {
        fontSize: "var(--md-size)",
        padding: "var(--xs-size) var(--default-size)"
    },
    medium: {
        fontSize: "2rem",
        padding: "var(--sm-size) var(--lg-size)"
    },
    large: {
        fontSize: "var(--lg-size)",
        padding: "var(--default-size) var(--xl-size)"
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
