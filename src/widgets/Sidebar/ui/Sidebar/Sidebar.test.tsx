import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from './Sidebar';
import {withTranslation} from 'react-i18next';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslations/renderWithTranslation';

describe('Sidebar Test', () => {
    test('Render Sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Render Sidebar with toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})