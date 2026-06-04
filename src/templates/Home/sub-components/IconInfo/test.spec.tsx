import { render, screen } from "@testing-library/react"
import { Location } from "@styled-icons/octicons"
import { userMock } from "test/mocks"

import { IconInfo, IconInfoProps } from "."

describe("<IconInfo />", () => {
    const defaultProps: IconInfoProps = {
        icon: <Location data-testid="location-icon" />,
        info: userMock.user.location
    }

    it("should render icon", () => {
        render(<IconInfo {...defaultProps} />)

        expect(screen.getByTestId("location-icon")).toBeInTheDocument()
    })

    it("should render info text", () => {
        render(<IconInfo {...defaultProps} />)

        expect(screen.getByText(/campinas, sp - brazil/i)).toBeInTheDocument()
    })

    it("should render info heading", () => {
        render(<IconInfo {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument()
    })

    it("should render heading with correct text", () => {
        render(<IconInfo {...defaultProps} />)

        expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
            "Campinas, SP - Brazil"
        )
    })
})
