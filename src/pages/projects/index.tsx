import { GetStaticProps } from 'next';

import ProjectsTemplate, { ProjectsTemplateProps } from "templates/Projects";

export const getStaticProps: GetStaticProps = async () => {
    const respApi = await fetch('https://api.github.com/users/gabrielrg14/starred')
    const repositories = await respApi.json()

    return {
        revalidate: 60,
        props: { 
            repositories 
        }
    }
}

const Projects = ({ repositories }: ProjectsTemplateProps) => {
    return <ProjectsTemplate repositories={repositories} />
}

export default Projects;