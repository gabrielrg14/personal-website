import { render, screen } from "@testing-library/react"

import { PageNotFoundTemplate } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("components", () => ({
    Blackboard: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="blackboard">{children}</div>
    )
}))

jest.mock("./sub-components", () => ({
    Error404: () => <h1 data-testid="error-404" />,
    HomeButton: () => <a data-testid="home-button" />,
    NotABug: () => <h2 data-testid="not-a-bug" />,
    PageNotFound: () => <h3 data-testid="page-not-found" />
}))

describe("<PageNotFoundTemplate />", () => {
    it("should render Blackboard component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("blackboard")).toBeInTheDocument()
    })

    it("should render Error404 component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("error-404")).toBeInTheDocument()
    })

    it("should render NotABug component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("not-a-bug")).toBeInTheDocument()
    })

    it("should render PageNotFound component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("page-not-found")).toBeInTheDocument()
    })

    it("should render HomeButton component", () => {
        render(<PageNotFoundTemplate />)

        expect(screen.getByTestId("home-button")).toBeInTheDocument()
    })
})
