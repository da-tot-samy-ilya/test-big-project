import React, {Component, FC, ReactElement, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactElement
}


const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const getTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
    const [theme, setTheme] = useState<Theme>(getTheme)

    
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;