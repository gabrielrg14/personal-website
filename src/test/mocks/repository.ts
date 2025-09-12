import { IRepository } from "interfaces"
import { userMock } from "./user"

const repository1: IRepository = {
    id: 581301714,
    name: "personal-website",
    html_url: "https://github.com/gabrielrg14/personal-website",
    homepage: "https://gabrielrapucci.com.br",
    topics: [
        "jest",
        "nextjs",
        "react-testing-library",
        "styled-components",
        "testing-library",
        "typescript"
    ],
    description:
        "My personal website, here you will learn a little more about me, my technology skills, my work experiences and also the projects I've developed.",
    owner: userMock.user
}

const repository2: IRepository = {
    id: 603423253,
    name: "pokedex",
    html_url: "https://github.com/gabrielrg14/pokedex",
    homepage: "https://pokedex.gabrielrapucci.com.br",
    topics: [
        "jest",
        "nextjs",
        "react-testing-library",
        "styled-components",
        "testing-library",
        "typescript"
    ],
    description:
        "Pokédex project that consumes the PokéAPI to display information of all existing Pokémon.",
    owner: userMock.user
}

export const repositoryMocks = {
    repository1,
    repository2,
    list: [repository1, repository2]
}
