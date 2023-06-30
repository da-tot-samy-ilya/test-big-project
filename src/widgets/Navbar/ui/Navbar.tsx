import React, {FC} from 'react';
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "../../ThemeSwitcher";

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.link} to={"/"}>Main</AppLink>
                <AppLink className={cls.link} to={"/about"}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;