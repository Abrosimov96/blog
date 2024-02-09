import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from 'shared/ui/Button/Button';

describe('Button Test', () => {
    test('Render Button', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('Render Button with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        // screen.debug()
    })
})
