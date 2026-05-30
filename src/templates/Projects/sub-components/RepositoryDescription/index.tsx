import * as S from "./styles"

export type RepositoryDescriptionProps = {
    description: string
}

export const RepositoryDescription = ({
    description
}: RepositoryDescriptionProps) => {
    return <S.Wrapper>{description}</S.Wrapper>
}
