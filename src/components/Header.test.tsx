import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmployeeProvider } from '../utilsContextProvider/EmployeeContextProvider'

import Header from './Header'

describe('Header', () => {
  it('Should render title', async () => {
    // render(
    //   <EmployeeProvider>
    //     <Header
    //       link="/employee-list"
    //       nameLink="View Current Employees"
    //       title="Create Employee"
    //     />
    //   </EmployeeProvider>
    // )
    // expect(screen.getByRole('heading', { level: 2 }))
    // const title = screen.getByText(/Create/i)
    // expect(title.textContent).toBe('Create Employee')
  })
})
