import { render, screen } from "@testing-library/react"

import { Header } from "."

describe("<Header />", () => {
    it("should render Header with navigation, list and logo image", () => {
        render(<Header />)

        const image = screen.getByRole("img", { name: /logo image/i })

        expect(screen.getByRole("navigation")).toBeInTheDocument()
        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(image).toHaveAccessibleName()
    })

    it("should render Header links with the correct attributes", () => {
        render(<Header />)

        const homeLink = screen.getByRole("link", { name: /go to home/i })
        const aboutLink = screen.getByRole("link", { name: /about me/i })
        const projectsLink = screen.getByRole("link", { name: /projects/i })

        expect(homeLink).toBeInTheDocument()
        expect(homeLink).toHaveAttribute("href", "/")
        expect(homeLink).toHaveAccessibleName()
        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink).toHaveAttribute("href", "/about")
        expect(aboutLink).toHaveAccessibleName()
        expect(projectsLink).toBeInTheDocument()
        expect(projectsLink).toHaveAttribute("href", "/projects")
        expect(projectsLink).toHaveAccessibleName()
    })
})
