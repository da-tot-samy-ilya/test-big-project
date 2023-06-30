import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'
const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    const onToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={cls.langSwitcher} onClick={onToggle}>{t('Язык')}</Button>
    )
}

export default LangSwitcher
