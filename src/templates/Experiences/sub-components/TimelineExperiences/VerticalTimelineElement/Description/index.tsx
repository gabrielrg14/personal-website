import * as S from "./styles"

export type DescriptionProps = {
    description: string
}

export const Description = ({ description }: DescriptionProps) => {
    return <S.Wrapper>{description}</S.Wrapper>
}
