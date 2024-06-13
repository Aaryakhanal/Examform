import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Pagee  from "../src/app/login2/pagee"

describe('Pagee', () => {
    it('render a heading', () => {
        render(<Pagee  />)

        const paragraph = screen.getByRole('heading', { level: 1});

        expect(paragraph).toBeInTheDocument()
    })

})