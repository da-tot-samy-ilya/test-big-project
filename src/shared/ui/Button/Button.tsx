import React, { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
}) => {
    return (
        <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    )
}
