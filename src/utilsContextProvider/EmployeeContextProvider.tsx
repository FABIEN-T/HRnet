// @ts-nocheck

import {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import employeeReducer from './employeeReducer'
import initialState from './initialState'
// import SwitchStateLocalStorage from './switchStateLocalStorage'

const EmployeeContext = createContext(null)
export default EmployeeContext

// Conception du Provider
export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState)

  const addToEmployeesList = useCallback((employee) => {
    dispatch({
      type: 'CREATE_EMPLOYEE',
      payload: employee,
    })
  }, [])

  const refresh = useCallback(() => {
    dispatch({
      type: 'REFRESH',
    })
  }, [])

  // valeur stockée dans le contexte
  const contextValue = useMemo(() => ({
    employees: state.employees,
    addToEmployeesList,
    refresh,
  }))

  const getLocalStorage =
    localStorage.getItem('employees') !== undefined ||
    localStorage.getItem('employees') === null
      ? JSON.parse(localStorage.getItem('employees'))
      : []
  const getLocalStorageLength =
    getLocalStorage === null ? 0 : getLocalStorage.length

  useEffect(() => {
    if (contextValue.employees.length >= getLocalStorageLength) {
      localStorage.setItem('employees', JSON.stringify(contextValue.employees))
      console.log(
        'Provider employees >=',
        contextValue.employees.length,
        getLocalStorageLength,
        contextValue.employees
      )
    }
    if (contextValue.employees.length < getLocalStorageLength) {
      refresh()
      console.log(
        'Provider employees <',
        contextValue.employees.length,
        JSON.parse(localStorage.getItem('employees')).length,
        contextValue.employees
      )
    }
    // localStorage.setItem('employees', JSON.stringify(result))
  })

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  )
}
