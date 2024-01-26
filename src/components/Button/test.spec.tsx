import { render, screen, fireEvent } from "@testing-library/react"

import { Button } from "."

describe("<Button />", () => {
    it("should render the button and the passed children", () => {
        render(
            <Button size="small" rounded>
                Test
            </Button>
        )

        expect(
            screen.getByRole("button", { name: /test/i })
        ).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })

    it("should call the onClick when the button is clicked", () => {
        const onClickMock = jest.fn()

        render(
            <Button variant="secondary" onClick={onClickMock}>
                Test
            </Button>
        )
        screen.debug()
        screen.logTestingPlaygroundURL()

        fireEvent.click(screen.getByRole("button", { name: /test/i }))

        expect(onClickMock).toHaveBeenCalled()
    })
})
