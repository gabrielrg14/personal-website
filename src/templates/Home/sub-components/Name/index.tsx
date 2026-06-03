import * as S from "./styles"

type NameProps = {
    text: string
}

export const Name = ({ text }: NameProps) => {
    return <S.Wrapper>{text}</S.Wrapper>
}
