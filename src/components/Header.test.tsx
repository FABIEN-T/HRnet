import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmployeeProvider } from '../utilsContextProvider/EmployeeContextProvider'

import Header from './Header'

describe('Header', () => {
  it('Should render title', async () => {
    render(
      <BrowserRouter>
        <EmployeeProvider>
          <Header
            link="/employee-list"
            nameLink="View Current Employees"
            title="Create Employee"
          />
        </EmployeeProvider>
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { level: 2 }))
    const title = screen.getByText(/Create/i)
    expect(title.textContent).toBe('Create Employee')
  })
})
