import * as S from "./styles"

export type BioProps = {
    text: string
}

export const Bio = ({ text }: BioProps) => {
    return <S.Wrapper>{text}</S.Wrapper>
}
