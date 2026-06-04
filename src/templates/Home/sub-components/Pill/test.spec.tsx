import { render, screen } from "@testing-library/react"

import { Pill, PillProps } from "."

describe("<Pill />", () => {
    const defaultProps: PillProps = {
        variant: "light",
        children: <h3>Default Pill</h3>
    }

    it("should render children correctly", () => {
        render(<Pill {...defaultProps} />)

        expect(screen.getByText("Default Pill")).toBeInTheDocument()
    })

    it("should render default variant when variant is undefined", () => {
        render(<Pill {...defaultProps} variant={undefined} />)

        expect(screen.getByText("Default Pill")).toBeInTheDocument()
    })

    it("should render dark variant when variant is 'dark'", () => {
        render(
            <Pill variant="dark">
                <h3>Dark Pill</h3>
            </Pill>
        )

        expect(screen.getByText("Dark Pill")).toBeInTheDocument()
    })

    it("should render light variant when variant is 'light'", () => {
        render(
            <Pill variant="light">
                <h3>Light Pill</h3>
            </Pill>
        )

        expect(screen.getByText("Light Pill")).toBeInTheDocument()
    })
})
