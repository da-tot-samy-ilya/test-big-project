import { render, screen, waitFor } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
    test('test', () => {
        render(<Button>test</Button>)
        expect(screen.getByText("test")).toBeInTheDocument()
    })
    test('has class', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass("clear")
    })
})
