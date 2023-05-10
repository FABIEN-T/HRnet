// @ts-nocheck

import { useContext, useEffect } from 'react'
import EmployeeContext from '../utils/EmployeeContextProvider'

export default function EssaiContext() {
  const { employees } = useContext(EmployeeContext)
  employees.map((employee) =>
    console.log('EssaiContext employees', employee.firstName)
  )
  return (
    <>
      <h1>Employees</h1>
      <div>
        {employees.map(
          (employee) => employee.firstName + ' ' + employee.lastName + '/ '
        )}
      </div>
    </>
  )
}
