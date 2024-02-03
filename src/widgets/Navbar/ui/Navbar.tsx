import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cl.Navbar, {}, [className])}>
            <div className={cl.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    About
                </AppLink>
            </div>
        </div>
    )
}
