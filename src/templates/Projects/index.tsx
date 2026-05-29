import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { IRepository } from "interfaces"
import { TechList } from "components"
import { RepositoryDescription, RepositoryTitle } from "./sub-components"

type ProjectsTemplateProps = {
    repositories: IRepository[]
}

export const ProjectsTemplate = ({ repositories }: ProjectsTemplateProps) => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <S.Wrapper>
                {repositories?.map((repository) => (
                    <S.Repository key={repository.id}>
                        <S.Blackboard>
                            <RepositoryTitle repository={repository} />
                            <TechList list={repository.topics} iconSize={36} />
                            <RepositoryDescription
                                description={repository.description}
                            />
                        </S.Blackboard>
                    </S.Repository>
                ))}
            </S.Wrapper>
        </>
    )
}
