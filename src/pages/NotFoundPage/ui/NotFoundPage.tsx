import { classNames } from 'shared/lib/classNames/classNames'
import cl from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('notFound')
    return (
        <div className={classNames(cl.NotFoundPage, {}, [className])} >
            {t('Page Not Found')}
        </div>
    )
}
