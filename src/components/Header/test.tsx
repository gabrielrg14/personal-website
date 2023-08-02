import { render, screen } from "@testing-library/react"

import Header from "."

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: ""
        }
    }
}))

describe("<Header />", () => {
    it("should render Header with navigation, list and logo image", () => {
        render(<Header />)

        const image = screen.getByRole("img", { name: /logo image/i })

        expect(screen.getByRole("navigation")).toBeInTheDocument()
        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("alt", "Logo image")
    })

    it("should the Header links with correct href", () => {
        render(<Header />)

        const logoLink = screen.getByRole("link", { name: /< logo image \/>/i })
        const aboutLink = screen.getByRole("link", { name: /about me/i })
        const projectsLink = screen.getByRole("link", { name: /projects/i })

        expect(logoLink).toBeInTheDocument()
        expect(logoLink).toHaveAttribute("href", "/")
        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink).toHaveAttribute("href", "/about")
        expect(projectsLink).toBeInTheDocument()
        expect(projectsLink).toHaveAttribute("href", "/projects")
    })
})
