import React, { type FC } from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Непредвиденная ошибка')}</h1>
            <button onClick={reloadPage}>{t('Перезагрузить страницу')}</button>
        </div>
    )
}
