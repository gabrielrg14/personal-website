import { IRepository } from "interfaces"
import { userMock } from "./user"

const pokedex: IRepository = {
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

const travelTheWorld: IRepository = {
    id: 651643128,
    name: "travel-the-world",
    html_url: "https://github.com/gabrielrg14/travel-the-world",
    homepage: "https://travels.gabrielrapucci.com.br",
    topics: [
        "cypress",
        "docker",
        "github-actions",
        "graphql",
        "jest",
        "nextjs",
        "react-testing-library",
        "styled-components",
        "testing-library",
        "typescript"
    ],
    description:
        "A website to show pinned places that have already been visited by me or those that I intend to visit someday.",
    owner: userMock.user
}

const tailwindInterfaces: IRepository = {
    id: 680193126,
    name: "tailwind-interfaces",
    html_url: "https://github.com/gabrielrg14/tailwind-interfaces",
    homepage: "https://tailwind.gabrielrapucci.com.br",
    topics: [
        "cypress",
        "docker",
        "github-actions",
        "nextjs",
        "tailwindcss",
        "typescript"
    ],
    description:
        "Interfaces (re)created using TailwindCSS to practice the framework.",
    owner: userMock.user
}

export const repositoryMocks = {
    pokedex,
    travelTheWorld,
    tailwindInterfaces,
    list: [pokedex, travelTheWorld, tailwindInterfaces],
    arrayList: [
        [pokedex.name, pokedex],
        [travelTheWorld.name, travelTheWorld],
        [tailwindInterfaces.name, tailwindInterfaces]
    ]
}
