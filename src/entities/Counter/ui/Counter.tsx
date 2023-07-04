import React, { type FC } from 'react'
import { Button, ThemeButton } from "../../../shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { type StateSchema } from "../../../app/providers/StoreProvider/config/StateSchema"

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const dispatch = useDispatch()

    const counterValue = useSelector((state: StateSchema) => state.counter.value)


    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value">{counterValue}</h1>
            <Button data-testid="increment-btn" style={{ marginRight: "10px" }} onClick={increment}>Increment</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>Decrement</Button>
        </div>
    )
}
