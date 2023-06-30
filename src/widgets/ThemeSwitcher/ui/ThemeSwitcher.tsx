import React, {FC} from 'react';
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import {useTheme} from "../../../app/providers/ThemeProvider";
import DarkIcon from "../../../shared/assets/dark.svg"
import LightIcon from "../../../shared/assets/light.svg"
import {Theme} from "../../../app/providers/ThemeProvider/lib/ThemeContext";
import {Button} from "../../../shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon/>}
        </Button>
    );
};