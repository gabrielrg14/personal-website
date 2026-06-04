import { render, screen } from "@testing-library/react"
import { userMock } from "test/mocks"

import { Avatar, AvatarProps } from "."

describe("<Avatar />", () => {
    const defaultProps: AvatarProps = {
        url: userMock.user.avatar_url
    }

    it("should not render when url is empty", () => {
        render(<Avatar url={""} />)

        expect(
            screen.queryByRole("img", {
                name: /avatar image/i
            })
        ).not.toBeInTheDocument()
    })

    it("should have correct src attribute", () => {
        render(<Avatar {...defaultProps} />)

        const imageSrc = screen
            .getByRole("img", {
                name: /avatar image/i
            })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(
                "https://avatars.githubusercontent.com/u/43639996?v=4"
            )
        )
    })

    it("should render with correct attributes", () => {
        render(<Avatar {...defaultProps} />)

        const image = screen.getByAltText(/avatar image/i)

        expect(image).toHaveAttribute("alt", "Avatar image")
        expect(image).toHaveAttribute("fetchpriority", "high")
        expect(image).toHaveAttribute("width", "250")
        expect(image).toHaveAttribute("height", "250")
    })
})
