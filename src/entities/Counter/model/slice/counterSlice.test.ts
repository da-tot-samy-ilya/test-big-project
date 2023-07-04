import { counterActions, counterReducer } from "./counterSlice"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type CounterSchema } from "../types/counterSchema"

describe("counterSlice", () => {
    const startState: DeepPartial<CounterSchema> = {
        value: 10
    }
    const endState1: DeepPartial<CounterSchema> = {
        value: 11
    }
    const endState2: DeepPartial<CounterSchema> = {
        value: 9
    }
    const endState3: DeepPartial<CounterSchema> = {
        value: 1
    }
    it("increment", () => {
        expect(counterReducer(startState as CounterSchema, counterActions.increment)).toEqual(endState1)
    })
    it("decrement", () => {
        expect(counterReducer(startState as CounterSchema, counterActions.decrement)).toEqual(endState2)
    })
    it("empty state", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual(endState3)
    })
})
