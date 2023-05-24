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

const EmployeeContext = createContext(null)
export default EmployeeContext

// Conception du Provider
export const EmployeeProvider = ({ children }) => {
  // const getLocalStorage = JSON.parse(localStorage.getItem('employees'))
  // const getLocalStorageLength =
  //   getLocalStorage === null ? 0 : getLocalStorage.length
  // const myInitialState =
  //   initialState.employees.length < getLocalStorageLength
  //     ? getLocalStorage
  //     : initialState
  // console.log('myInitialState', myInitialState)
  // const [state, dispatch] = useReducer(employeeReducer, myInitialState)

  const [state, dispatch] = useReducer(employeeReducer, initialState)

  const addToEmployeesList = useCallback((employee) => {
    dispatch({
      type: 'CREATE_EMPLOYEE',
      payload: employee,
    })
    // localStorage.setItem('employees', JSON.stringify(state.employees))
  }, [])

  // valeur stockée dans le contexte
  const contextValue = useMemo(() => ({
    employees: state.employees,
    addToEmployeesList,
  }))

  useEffect(() => {
    console.log('Provider state 1', contextValue.employees.length)
    const getLocalStorage = localStorage.getItem('employees')
      ? JSON.parse(localStorage.getItem('employees'))
      : []
    // console.log('Provider state 2', getLocalStorage)
    const getLocalStorageLength =
      getLocalStorage === null ? 0 : getLocalStorage.length
    console.log('Provider state 2', getLocalStorage, getLocalStorageLength)
    const result =
      contextValue.employees.length < getLocalStorageLength
        ? getLocalStorage
        : contextValue.employees
    console.log('Provider state 3', result)
    // console.log('Provider state 2', localStorage.getItem('employees').length)
    // localStorage.setItem('employees', JSON.stringify(contextValue.employees))
    localStorage.setItem('employees', JSON.stringify(result))
  })

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  )
}
