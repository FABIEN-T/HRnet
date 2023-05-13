import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import DivLogo from './DivLogo'

describe('DivLogo', () => {
  it('Renders HRnet', () => {
    render(<DivLogo />)
    expect(screen.getByRole('heading', { level: 1 }))
  })

  it('alt contains correct value', () => {
    render(<DivLogo />)
    const image = screen.getByAltText('Logo-Wealth-Health')
    expect(image).toHaveAttribute('alt', 'Logo-Wealth-Health')
  })
})
