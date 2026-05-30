import { render, screen } from "@testing-library/react"
import { repositoryMocks } from "test/mocks"

import { RepositoryDescription, RepositoryDescriptionProps } from "."

describe("<RepositoryDescription />", () => {
    const defaultProps: RepositoryDescriptionProps = {
        description: repositoryMocks.pokedex.description
    }

    it("should render the passed text", () => {
        render(<RepositoryDescription {...defaultProps} />)

        expect(
            screen.getByText(
                "Pokédex project that consumes the PokéAPI to display information of all existing Pokémon."
            )
        ).toBeInTheDocument()
    })

    it("should render paragraph element", () => {
        const { container } = render(
            <RepositoryDescription {...defaultProps} />
        )

        const paragraph = container.querySelector("p")
        expect(paragraph?.tagName).toBe("P")
    })

    it("should render paragraph with correct text", () => {
        const { container } = render(
            <RepositoryDescription {...defaultProps} />
        )

        const paragraph = container.querySelector("p")
        expect(paragraph?.textContent).toBe(repositoryMocks.pokedex.description)
    })

    it("should render empty paragraph when description is empty", () => {
        const { container } = render(<RepositoryDescription description="" />)

        const paragraph = container.querySelector("p")
        expect(paragraph?.textContent).toBe("")
    })
})
