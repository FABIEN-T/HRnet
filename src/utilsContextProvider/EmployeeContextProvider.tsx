// @ts-nocheck

import { createContext, useReducer, useMemo } from 'react'
import employeeReducer from './employeeReducer'
import initialState from './initialState'

const EmployeeContext = createContext(null)
export default EmployeeContext

// Provider Design
export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState)

  // Values stored in context
  const contextValue = useMemo(() => ({
    state,
    dispatch,
  }))

  console.log('state.employees', state.employees)

  // Local storage management
  const getLocalStorage =
    localStorage.getItem('employees') === undefined ||
    localStorage.getItem('employees') === null
      ? []
      : JSON.parse(localStorage.getItem('employees'))
  const getLocalStorageLength =
    getLocalStorage == [] ? 0 : getLocalStorage.length

  // Add new employee in local storage
  if (state.employees.length >= getLocalStorageLength) {
    localStorage.setItem('employees', JSON.stringify(state.employees))
  }
  // Put the contents of local storage in the state when refreshing the browser
  if (state.employees.length < getLocalStorageLength) {
    dispatch({
      type: 'REFRESH',
    })
  }

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  )
}
