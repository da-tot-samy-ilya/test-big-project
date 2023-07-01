import React, {type ErrorInfo, type ReactNode, Suspense} from 'react'
import { PageError } from '../../../../widgets/PageError/ui/PageError'
import path from "path";

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error) {
        return { hasError: true }
    }

    componentDidCatch (error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack)
    }

    render () {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback={<p></p>}>
                    <PageError/>
                </Suspense>
            )
        }

        return children
    }
}
