import { componentRender } from "../../../shared/lib/tests/componentRender/componentRender"
import { Counter } from "./Counter"
import { screen } from "@testing-library/react"

describe("Counter", () => {
    it("", () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })

        expect(screen.getAllByTestId("value")).toHaveTextContent("10")
    })
})
