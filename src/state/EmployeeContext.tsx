// @ts-nocheck

import { createContext, useReducer, useContext } from 'react'
import employeeReducer, { initialState } from './employeeReducer'

const EmployeeContext = createContext()

// création d'un hook utilisant EmployeeContext
const useEmployee = () => {
  const context = useContext(EmployeeContext)

  if (context === undefined) {
    throw new Error('useEmployee must be used within EmployeeContext')
  }

  return context
}

export default useEmployee

// Conception du Provider
export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState)

  const addToEmployeesList = (employee) => {
    // const updatedEmployeesList = state.employees.push(employee)

    dispatch({
      type: 'CREATE_EMPLOYEE',
      payload: {
        // employees: updatedEmployeesList,
        employees: state.employees.push(employee),
      },
    })
  }

  const value = {
    employees: state.employees,
    addToEmployeesList,
  }

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  )
}
