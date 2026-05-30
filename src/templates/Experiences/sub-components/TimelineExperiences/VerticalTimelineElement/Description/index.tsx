import * as S from "./styles"

type DescriptionProps = {
    description: string
}

export const Description = ({ description }: DescriptionProps) => {
    return <S.Wrapper>{description}</S.Wrapper>
}
