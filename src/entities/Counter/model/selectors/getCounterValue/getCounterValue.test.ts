import { getCounterValue } from "./getCounterValue"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type StateSchema } from "../../../../../app/providers/StoreProvider/config/StateSchema"


describe("getCounterValue", () => {
    it("should return value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        }
        expect(getCounterValue(state as StateSchema)).toBe(10)
    })
})
