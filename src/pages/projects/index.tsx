import Head from 'next/head';
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
} from "./styles";

import TechList from "../../components/TechList";
import TechCard from "../../components/TechCard";

import techs from "../../utils/techProjects";

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
        <Wrapper>
            <Head>
                <title>{`<Projects />`}</title>
                <meta name="keywords" content="Projects, Dev Frontend, Frontend Projects, Web Projects" />
                <meta name="description" content="Showing projects developed by a Frontend Developer" />
            </Head>
            
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
    )
}

export default Projects;