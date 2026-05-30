import * as S from "./styles"

type CompanyProps = {
    company: string
}

export const Company = ({ company }: CompanyProps) => {
    return <S.Wrapper>{company}</S.Wrapper>
}
