import { ButtonHTMLAttributes } from "react"

import * as S from "./styles"

type ButtonProps = {
    variant?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    rounded?: boolean
    children: React.ReactNode
}

export const Button = ({
    variant = "primary",
    size = "medium",
    rounded = false,
    children,
    ...rest
}: ButtonHTMLAttributes<ButtonProps> & ButtonProps) => {
    return (
        <S.Button variant={variant} size={size} rounded={rounded} {...rest}>
            {children}
        </S.Button>
    )
}
