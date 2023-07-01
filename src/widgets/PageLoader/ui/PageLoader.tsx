import React, { type FC } from 'react'
import './PageLoader.scss'
import { Loader } from '../../../shared/ui/Loader'
interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className="PageLoader">
            <Loader/>
        </div>
    )
}
