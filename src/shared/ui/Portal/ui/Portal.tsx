import { type FC, type ReactNode } from 'react'

import { createPortal } from "react-dom"

interface PortalProps {
    className?: string
    children: ReactNode
    element?: HTMLElement
}

export const Portal: FC<PortalProps> = ({ className, children, element = document.body }) => {
    return createPortal(children, element)
}
