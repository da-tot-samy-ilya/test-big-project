import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from "../../../entities/Counter/ui/Counter"

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Counter/>
            {t('Главная')}
        </div>
    )
}

export default MainPage
