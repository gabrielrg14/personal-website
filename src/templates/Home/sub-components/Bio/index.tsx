import * as S from "./styles"

type BioProps = {
    text: string
}

export const Bio = ({ text }: BioProps) => {
    return <S.Wrapper>{text}</S.Wrapper>
}
