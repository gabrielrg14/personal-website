import { GetStaticProps } from "next"

import { IRepository } from "interfaces"
import { UserService } from "services"
import { ProjectsTemplate } from "templates"

export const getStaticProps: GetStaticProps = async () => {
    const repositories = await UserService.getUserStarredRepos("gabrielrg14")

    return {
        revalidate: 60,
        props: { repositories }
    }
}

type ProjectsProps = {
    repositories: IRepository[]
}

const Projects = ({ repositories }: ProjectsProps) => {
    return <ProjectsTemplate repositories={repositories} />
}

export default Projects
