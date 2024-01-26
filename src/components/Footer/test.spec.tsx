import { render, screen } from "@testing-library/react"
import { USERNAME } from "common"

import { Footer } from "."

describe("<Footer />", () => {
    it("should render with the informative texts", () => {
        render(<Footer />)

        expect(screen.getByText(/by gabriel rapucci/i)).toBeInTheDocument()
        expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
    })

    it("should render the link to linkedin with the correct attributes, accessible name and description", () => {
        render(<Footer />)

        const linkedinLink = screen.getByRole("link", { name: /linkedin/i })

        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/gabrielrapuccigonzalez/"
        )
        expect(linkedinLink).toHaveAttribute("target", "_blank")
        expect(linkedinLink).toHaveAttribute("rel", "noreferrer")
        expect(linkedinLink).toHaveAccessibleName(/linkedin/i)
        expect(linkedinLink).toHaveAccessibleDescription(/linkedin/i)
    })

    it("should render the link to github with the correct attributes, accessible name and description", () => {
        render(<Footer />)

        const githubLink = screen.getByRole("link", { name: /github/i })

        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute(
            "href",
            `https://github.com/${USERNAME}`
        )
        expect(githubLink).toHaveAttribute("target", "_blank")
        expect(githubLink).toHaveAttribute("rel", "noreferrer")
        expect(githubLink).toHaveAccessibleName(/github/i)
        expect(githubLink).toHaveAccessibleDescription(/github/i)
    })
})
