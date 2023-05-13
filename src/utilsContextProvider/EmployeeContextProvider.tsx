// @ts-nocheck

import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import employeeReducer, { initialState } from './employeeReducer'
// import initialState from './initialState'

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

  // valeur stockée dans le contexte
  const contextValue = useMemo(() => ({
    employees: state.employees,
    addToEmployeesList,
  }))

  useEffect(() => console.log('Provider state', contextValue.employees))

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  )
}
