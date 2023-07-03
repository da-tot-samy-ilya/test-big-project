import React, {type FC, useState} from 'react'
import {classNames} from '../../../shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from '../../../shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import {Modal} from "../../../shared/ui/Modal/ui/Modal";
import {Button, ThemeButton} from "../../../shared/ui/Button/Button";


interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.OUTLINED} onClick={() => setIsOpenModal(true)}>{t("Войти")}</Button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.link} to={'/'}>{t('Главная')}</AppLink>
                <AppLink className={cls.link} to={'/about'}>{t('О нас')}</AppLink>
            </div>
            <Modal isOpen={isOpenModal} onClose={() => { setIsOpenModal(false) }}>
                _____________________Form_____________________
            </Modal>
        </div>
    )
}

export default Navbar
