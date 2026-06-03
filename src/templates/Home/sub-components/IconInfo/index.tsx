import * as S from "./styles"

type IconInfoProps = {
    icon: React.ReactNode
    info: string
}

export const IconInfo = ({ icon, info }: IconInfoProps) => {
    return (
        <S.Wrapper>
            {icon}
            <S.Info>{info}</S.Info>
        </S.Wrapper>
    )
}
