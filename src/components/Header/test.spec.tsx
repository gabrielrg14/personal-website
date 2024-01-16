import { render, screen } from "@testing-library/react"

import { Header } from "."

describe("<Header />", () => {
    it("should render with the navigation, link list and logo image", () => {
        render(<Header />)

        const logoImage = screen.getByRole("img", { name: /logo image/i })

        expect(screen.getByRole("navigation")).toBeInTheDocument()
        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(logoImage).toBeInTheDocument()
        expect(logoImage).toHaveAccessibleName(/logo image/i)
    })

    it("should render the home link with href and accessible name", () => {
        render(<Header />)

        const homeLink = screen.getByRole("link", { name: /go to home/i })

        expect(homeLink).toBeInTheDocument()
        expect(homeLink).toHaveAttribute("href", "/")
        expect(homeLink).toHaveAccessibleName(/go to home/i)
    })
    it("should render the about link with href and accessible name", () => {
        render(<Header />)

        const aboutLink = screen.getByRole("link", { name: /about me/i })

        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink).toHaveAttribute("href", "/about")
        expect(aboutLink).toHaveAccessibleName(/about me/i)
    })
    it("should render the projects link with href and accessible name", () => {
        render(<Header />)

        const projectsLink = screen.getByRole("link", { name: /projects/i })

        expect(projectsLink).toBeInTheDocument()
        expect(projectsLink).toHaveAttribute("href", "/projects")
        expect(projectsLink).toHaveAccessibleName(/projects/i)
    })
})
