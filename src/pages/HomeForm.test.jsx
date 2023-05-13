import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmployeeProvider } from '../utilsContextProvider/EmployeeContextProvider'

import HomeForm from './HomeForm'

describe('Checks the display of the Employee Form component', () => {
  // Test that the form have text "First Name"
  it('should display the first name', () => {
    render(
      //   <EmployeeProvider>
      <HomeForm />
      //   </EmployeeProvider>
    )

    const firstName = screen.getByText(/First Name/i)
    expect(firstName).toBeInTheDocument()
  })
})
