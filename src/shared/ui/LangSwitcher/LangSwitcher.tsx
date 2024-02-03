import {classNames} from 'shared/lib/classNames/classNames';
import cl from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next';
import React from 'react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'bg' : 'en')
    }

    return (
            <Button
                className={classNames(cl.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('Language')}
            </Button>
    );
};