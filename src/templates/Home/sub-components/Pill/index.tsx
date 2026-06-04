import * as S from "./styles"

export type PillProps = {
    variant?: "light" | "dark"
    children: React.ReactNode
}

export const Pill = ({ variant = "light", children }: PillProps) => {
    if (variant === "dark") return <S.DarkPill>{children}</S.DarkPill>

    return <S.Pill>{children}</S.Pill>
}
