// @ts-expect-error resolved by vite
import { expect } from '@wdio/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as matchers from '@testing-library/jest-dom/matchers.js'
expect.extend(matchers)

import App from './components/ReactComponent.jsx'

describe('React Component Testing', () => {
    it('Test theme button toggle', async () => {
        render(<App />)
        const buttonEl = screen.getByText(/Current theme/i)

        // @ts-expect-error - @testing-library/user-event is not fully ESM compatible
        await userEvent.click(buttonEl)
        expect(buttonEl).toContainHTML('dark')
    })
})