import { render, screen } from "@testing-library/react"

import { Analytics } from "."

describe("<Analytics />", () => {
    it("should render google analytics script tags", () => {
        render(<Analytics />)

        expect(screen.getByTestId(/gtag-script/i)).toBeInTheDocument()
        expect(screen.getByTestId(/ga-script/i)).toBeInTheDocument()
    })
})
