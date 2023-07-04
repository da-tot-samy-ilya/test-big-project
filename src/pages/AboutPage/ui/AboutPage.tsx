import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from "../../../entities/Counter/ui/Counter"

const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Counter/>
            {t('О нас')}
        </div>
    )
}

export default AboutPage
