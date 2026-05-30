import * as S from "./styles"
import { IRepository } from "interfaces"
import { RepositoryName } from "./RepositoryName"
import { RepositoryLinks } from "./RepositoryLinks"

export type RepositoryTitleProps = {
    repository: IRepository
}

export const RepositoryTitle = ({ repository }: RepositoryTitleProps) => {
    return (
        <S.Wrapper>
            <RepositoryName name={repository.name} />
            <RepositoryLinks repository={repository} />
        </S.Wrapper>
    )
}
