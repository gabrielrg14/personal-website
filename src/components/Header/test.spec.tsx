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

    it("should render the skills link with href and accessible name", () => {
        render(<Header />)

        const skillsLink = screen.getByRole("link", { name: /skills/i })

        expect(skillsLink).toBeInTheDocument()
        expect(skillsLink).toHaveAttribute("href", "/skills")
        expect(skillsLink).toHaveAccessibleName(/skills/i)
    })

    it("should render the experiences link with href and accessible name", () => {
        render(<Header />)

        const experiencesLink = screen.getByRole("link", {
            name: /experiences/i
        })

        expect(experiencesLink).toBeInTheDocument()
        expect(experiencesLink).toHaveAttribute("href", "/experiences")
        expect(experiencesLink).toHaveAccessibleName(/experiences/i)
    })

    it("should render the projects link with href and accessible name", () => {
        render(<Header />)

        const projectsLink = screen.getByRole("link", { name: /projects/i })

        expect(projectsLink).toBeInTheDocument()
        expect(projectsLink).toHaveAttribute("href", "/projects")
        expect(projectsLink).toHaveAccessibleName(/projects/i)
    })
})
