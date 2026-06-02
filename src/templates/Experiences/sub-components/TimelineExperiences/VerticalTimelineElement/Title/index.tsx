import * as S from "./styles"

export type TitleProps = {
    title: string
}

export const Title = ({ title }: TitleProps) => {
    return <S.Wrapper>{title}</S.Wrapper>
}
