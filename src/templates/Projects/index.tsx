import { NextSeo } from "next-seo"

import * as S from "./styles"
import { IRepository } from "interfaces"
import { Container, TechList, TechCard } from "components"
import { formatRepositoryName, techListing as techs } from "utils"
import { MarkGithub, Globe } from "@styled-icons/octicons"

type ProjectsTemplateProps = {
    repositories: IRepository[]
}

export const ProjectsTemplate = ({ repositories }: ProjectsTemplateProps) => {
    return (
        <>
            <NextSeo
                title="Projects"
                description="Main projects developed and published by me on GitHub throughout my career as a Frontend Developer."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "GitHub, Projects, Dev Projects, Web Projects, Frontend Projects, React Projects, Frontend Developer"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/projects`}
            />

            <Container>
                <S.Projects>
                    {repositories?.map((repository) => (
                        <S.Project key={repository.id}>
                            <S.Title>
                                {formatRepositoryName(repository.name)}
                            </S.Title>

                            <S.Links>
                                <S.IconLink
                                    href={repository.html_url}
                                    aria-label={repository.name}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MarkGithub />
                                </S.IconLink>

                                {repository.homepage && (
                                    <S.IconLink
                                        href={repository.homepage}
                                        aria-label="Go to website"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Globe />
                                    </S.IconLink>
                                )}
                            </S.Links>

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
                                            />
                                        )
                                )}
                            </TechList>

                            <S.Description>
                                {repository.description}
                            </S.Description>
                        </S.Project>
                    ))}
                </S.Projects>
            </Container>
        </>
    )
}
