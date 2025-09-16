import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import Link from "next/link"
import { IRepository } from "interfaces"
import { TechList, TechCard } from "components"
import { formatRepositoryName, techListing as techs } from "utils"
import { MarkGithub, Globe } from "@styled-icons/octicons"

type ProjectsTemplateProps = {
    repositories: IRepository[]
}

export const ProjectsTemplate = ({ repositories }: ProjectsTemplateProps) => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <S.Projects>
                {repositories?.map((repository) => (
                    <S.Project key={repository.id}>
                        <S.StyledBlackboard>
                            <S.Repository>
                                <S.Title>
                                    {formatRepositoryName(repository.name)}
                                </S.Title>

                                <S.Links>
                                    <S.IconLink>
                                        <Link
                                            title="GitHub"
                                            href={repository.html_url}
                                            aria-label="Go to the project repository on GitHub"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <MarkGithub />
                                        </Link>
                                    </S.IconLink>

                                    {repository.homepage && (
                                        <S.IconLink>
                                            <Link
                                                title="Website"
                                                href={repository.homepage}
                                                aria-label="Go to the repository Website"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Globe />
                                            </Link>
                                        </S.IconLink>
                                    )}
                                </S.Links>
                            </S.Repository>

                            <TechList>
                                {techs.map(
                                    ({ icon, label, identifier }) =>
                                        repository.topics.includes(
                                            identifier
                                        ) && (
                                            <TechCard
                                                key={identifier}
                                                label={label}
                                                icon={icon}
                                                iconSize={36}
                                            />
                                        )
                                )}
                            </TechList>

                            <S.Description>
                                {repository.description}
                            </S.Description>
                        </S.StyledBlackboard>
                    </S.Project>
                ))}
            </S.Projects>
        </>
    )
}
