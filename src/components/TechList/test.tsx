import { render, screen } from "@testing-library/react"

import TechList from "."

describe("<TechList />", () => {
    it("should render the wrapper", () => {
        render(<TechList>Test</TechList>)

        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
