import * as S from "./styles"
import { IRepository } from "interfaces"
import { LinkItem } from "./LinkItem"
import { Globe, MarkGithub } from "styled-icons/octicons"

export type RepositoryLinksProps = {
    repository: IRepository
}

export const RepositoryLinks = ({ repository }: RepositoryLinksProps) => {
    return (
        <S.Wrapper>
            <LinkItem
                title="GitHub"
                href={repository.html_url}
                ariaLabel="Go to the project repository on GitHub"
            >
                <MarkGithub />
            </LinkItem>

            {repository.homepage && (
                <LinkItem
                    title="Website"
                    href={repository.homepage}
                    ariaLabel="Go to the repository Website"
                >
                    <Globe />
                </LinkItem>
            )}
        </S.Wrapper>
    )
}
