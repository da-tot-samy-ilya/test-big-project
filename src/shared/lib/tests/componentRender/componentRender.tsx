import { type ReactNode } from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { StoreProvider } from "../../../../app/providers/StoreProvider"
import { type DeepPartial } from "@reduxjs/toolkit"
import { type StateSchema } from "../../../../app/providers/StoreProvider/config/StateSchema"

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}
export function componentRender (component: ReactNode, options: ComponentRenderOptions) {
    const { route = "/", initialState } = options
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                {component}
            </MemoryRouter>
        </StoreProvider>

    )
}
