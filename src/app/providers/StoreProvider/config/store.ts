import { configureStore } from "@reduxjs/toolkit"
import { type StateSchema } from "./StateSchema"
import { counterReducer } from "../../../../entities/Counter/model/slice/counterSlice"

export function createReduxStore (initialState: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer
        },
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}
