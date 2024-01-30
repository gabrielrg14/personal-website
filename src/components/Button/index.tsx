import * as S from "./styles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
}: ButtonProps) => {
    return (
        <S.Button variant={variant} size={size} rounded={rounded} {...rest}>
            {children}
        </S.Button>
    )
}
