import { NextSeo } from "next-seo"

import * as S from "./styles"
import Link from "next/link"
import { IRepository } from "interfaces"
import { TechList, TechCard } from "components"
import { techProjects as techs } from "utils"
import { ExternalLink } from "@styled-icons/remix-line"

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

            <S.Wrapper>
                <S.SupportText>
                    Click on the project title to be redirected to the
                    repository on Github
                </S.SupportText>

                <S.ProjectsList>
                    {repositories?.map((repository) => (
                        <S.Project key={repository.id}>
                            <S.ProjectTitle>
                                <Link
                                    href={repository.html_url}
                                    aria-label={repository.name}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {repository.name}
                                </Link>
                            </S.ProjectTitle>

                            <TechList>
                                {techs.map(
                                    ({ icon, label, identifier }) =>
                                        repository.topics.includes(
                                            identifier
                                        ) && (
                                            <TechCard
                                                key={label}
                                                label={label}
                                                icon={icon}
                                            />
                                        )
                                )}
                            </TechList>

                            {repository.homepage && (
                                <S.ProjectWebsite>
                                    <Link
                                        href={repository.homepage}
                                        aria-label="Go to website"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Go to website{" "}
                                        <S.Icon>
                                            <ExternalLink />
                                        </S.Icon>
                                    </Link>
                                </S.ProjectWebsite>
                            )}

                            <S.ProjectDescription>
                                {repository.description}
                            </S.ProjectDescription>
                        </S.Project>
                    ))}
                </S.ProjectsList>
            </S.Wrapper>
        </>
    )
}
