import { render, screen } from "@testing-library/react"
import { userMock } from "test/mocks"

import { HomeTemplate, HomeTemplateProps } from "."

jest.mock("next-seo", () => ({
    NextSeo: () => null
}))

jest.mock("./sub-components", () => ({
    Avatar: () => <div data-testid="avatar" />,
    Bio: () => <div data-testid="bio" />,
    IconInfo: () => <div data-testid="icon-info" />,
    Name: () => <div data-testid="name" />,
    Pill: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="pill">{children}</div>
    )
}))

describe("<HomeTemplate />", () => {
    const defaultProps: HomeTemplateProps = {
        user: userMock.user
    }

    it("should render Avatar component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("avatar")).toBeInTheDocument()
    })

    it("should render Pill component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getAllByTestId("pill")).toHaveLength(3)
    })

    it("should render Name component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("name")).toBeInTheDocument()
    })

    it("should render Bio component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getByTestId("bio")).toBeInTheDocument()
    })

    it("should render IconInfo component", () => {
        render(<HomeTemplate {...defaultProps} />)

        expect(screen.getAllByTestId("icon-info")).toHaveLength(2)
    })
})
