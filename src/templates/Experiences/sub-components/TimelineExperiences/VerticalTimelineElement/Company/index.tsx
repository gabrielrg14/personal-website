import * as S from "./styles"

export type CompanyProps = {
    company: string
}

export const Company = ({ company }: CompanyProps) => {
    return <S.Wrapper>{company}</S.Wrapper>
}
