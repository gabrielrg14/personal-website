import * as S from "./styles"

type TechListProps = {
    children: React.ReactNode
}

export const TechList = ({ children }: TechListProps) => {
    return <S.Wrapper>{children}</S.Wrapper>
}
