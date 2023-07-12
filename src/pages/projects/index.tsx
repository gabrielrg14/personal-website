import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { 
    Wrapper,
    SupportText,
    ProjectsList,
    Project,
    ProjectTitle,
    ProjectWebsite,
    Icon,
    ProjectDescription,
} from "../../common/styles/pages/projects";

import TechList from "../../components/TechList";
import TechCard from "../../components/TechCard";

import techs from "../../common/utils/techProjects";

import { ExternalLink } from "@styled-icons/remix-line/ExternalLink";

interface Repository {
    id: number,
    name: string,
    description: string,
    language: string,
    homepage: string,
    topics: string[],
    owner: Object,
    html_url: string,
    created_at: Date,
}

interface ProjectsProps {
    repositories: Repository[],
}

export async function getStaticProps() {
    const respApi = await fetch('https://api.github.com/users/gabrielrg14/starred')
    const repositories = await respApi.json()

    return {
        props: { repositories },
    }
}

const Projects: React.FC<ProjectsProps> = ({ repositories }): JSX.Element => {
    return (
        <>
            <NextSeo
                title="Projects"
                description="Main projects developed and published by me on GitHub throughout my career as a Frontend Developer."
                additionalMetaTags={[{
                    name: "keywords",
                    content: "GitHub, Projects, Dev Projects, Web Projects, Frontend Projects, React Projects, Frontend Developer"
                }]}
            />

            <Wrapper>
                <SupportText>Click on the project title to be redirected to the repository on Github</SupportText>

                <ProjectsList>
                    {repositories?.map(repository => (
                        <Project key={repository.id}>
                            <ProjectTitle>
                                <Link href={repository.html_url} target="_blank" rel="noreferrer">
                                    {repository.name}
                                </Link>
                            </ProjectTitle>

                            <TechList>
                                {techs.map(({ icon, label, identifier }) => 
                                    repository.topics.includes(identifier) && (
                                        <TechCard key={label} label={label} icon={icon} />
                                    )
                                )}
                            </TechList>

                            {repository.homepage &&
                                <ProjectWebsite>
                                    <Link href={repository.homepage} target="_blank" rel="noreferrer">
                                        Go to website <Icon><ExternalLink /></Icon>
                                    </Link>
                                </ProjectWebsite>
                            }

                            <ProjectDescription>{repository.description}</ProjectDescription>
                        </Project>
                    ))}
                </ProjectsList>
            </Wrapper>
        </>
    )
}

export default Projects;