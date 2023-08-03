import { render, screen } from "@testing-library/react"

import Footer from "."

describe("<Footer />", () => {
    it("should render Footer with the important information", () => {
        render(<Footer />)

        expect(
            screen.getByText(/gabriel rapucci gonzalez/i)
        ).toBeInTheDocument()
        expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
    })

    it("should render Footer links with the correct attributes", () => {
        render(<Footer />)

        const linkedinLink = screen.getByRole("link", { name: /linkedin/i })
        const githubLink = screen.getByRole("link", { name: /github/i })

        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/gabrielrapuccigonzalez/"
        )
        expect(linkedinLink).toHaveAttribute("target", "_blank")
        expect(linkedinLink).toHaveAttribute("rel", "noreferrer")
        expect(linkedinLink).toHaveAccessibleName()
        expect(linkedinLink).toHaveAccessibleDescription()

        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute(
            "href",
            "https://github.com/gabrielrg14"
        )
        expect(githubLink).toHaveAttribute("target", "_blank")
        expect(githubLink).toHaveAttribute("rel", "noreferrer")
        expect(githubLink).toHaveAccessibleName()
        expect(githubLink).toHaveAccessibleDescription()
    })
})
