import { render, screen } from "@testing-library/react"

import Analytics from "."

describe("<Analytics />", () => {
    it("should contain the Google Analytics script tags", () => {
        render(<Analytics />)

        expect(screen.getByTestId("gtag-script")).toBeInTheDocument()
        expect(screen.getByTestId("ga-script")).toBeInTheDocument()
    })
})
