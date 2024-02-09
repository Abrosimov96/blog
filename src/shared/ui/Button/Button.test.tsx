import {render, screen} from '@testing-library/react'
import {Button} from 'shared/ui/Button/Button';
describe('Button Test', () => {
    test('Render Button', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
