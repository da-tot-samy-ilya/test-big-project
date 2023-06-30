import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation("about")
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {t("О нас")}
        </div>
    );
};

export default AboutPage;