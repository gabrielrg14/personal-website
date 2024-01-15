import * as S from "./styles"

type TechCardProps = {
    icon: React.ReactNode
    label: string
}

export const TechCard = ({ icon, label }: TechCardProps) => {
    return (
        <S.Wrapper>
            <S.Icon>{icon}</S.Icon>
            <p>{label}</p>
        </S.Wrapper>
    )
}
