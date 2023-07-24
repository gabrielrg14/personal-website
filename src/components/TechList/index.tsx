import * as S from "./styles"

type TechListProps = {
    children: React.ReactNode
}

const TechList = ({ children }: TechListProps) => {
    return <S.Wrapper>{children}</S.Wrapper>
}

export default TechList
