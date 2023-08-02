import { render, screen } from "@testing-library/react"

import Layout from "."

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

describe("<Layout />", () => {
    it("should render the layout with the passed children", () => {
        render(
            <Layout>
                <div data-testid="layout">Test</div>
            </Layout>
        )

        expect(screen.getByTestId("layout")).toBeInTheDocument()
        expect(screen.getByText(/test/i)).toBeInTheDocument()
    })
})
