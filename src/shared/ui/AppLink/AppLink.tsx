import { type FC } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
export const AppLink: FC<AppLinkProps> = ({
                                              theme = AppLinkTheme.PRIMARY,
                                              className,
                                              children,
                                              to,
                                              ...otherProps
}) => {
    return (
        <Link {...otherProps} to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}
