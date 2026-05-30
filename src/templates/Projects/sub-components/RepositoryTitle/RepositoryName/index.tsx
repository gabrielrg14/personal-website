import * as S from "./styles"
import { formatRepositoryName } from "utils"

export type RepositoryNameProps = {
    name: string
}

export const RepositoryName = ({ name }: RepositoryNameProps) => {
    return <S.Wrapper>{formatRepositoryName(name)}</S.Wrapper>
}
