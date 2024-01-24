import * as S from "./styles"

type TechCardProps = {
    label: string
    icon: React.ReactNode
    iconSize?: number
}

export const TechCard = ({ label, icon, iconSize }: TechCardProps) => {
    return (
        <S.Wrapper>
            <S.Icon size={iconSize}>{icon}</S.Icon>
            <p>{label}</p>
        </S.Wrapper>
    )
}
