import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import FirstName from './FirstName'

describe('FirstName', () => {
  it('Renders HRnet', () => {
    render(<FirstName />)
    expect(screen.getByLabelText('First Name'))
  })

  //   it('alt contains correct value', () => {
  //     render(<DivLogo />)
  //     const image = screen.getByAltText('Logo-Wealth-Health')
  //     expect(image).toHaveAttribute('alt', 'Logo-Wealth-Health')
  //   })
})
