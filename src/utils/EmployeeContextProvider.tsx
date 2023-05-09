// @ts-nocheck

import {
  createContext,
  useReducer,
  useContext,
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
  const [state, dispatch] = useReducer(employeeReducer, initialState)

  const addToEmployeesList = useCallback((employee) => {
    // console.log('EmployeeContext : employee', employee)
    // console.log('EmployeeContext : employeeS !', state.employees)
    // const employees = state.employees.concat(employee)
    dispatch({
      type: 'CREATE_EMPLOYEE',
      // payload: state.employees.concat(employee),
      payload: employee,
    })
  }, [])

  // valeur stockée dans le contexte
  const contextValue = useMemo(() => ({
    employees: state.employees,
    addToEmployeesList,
  }))
  // const contextValue = {
  //   employees: state.employees,
  //   addToEmployeesList,
  // }
  // const employees = state.employees

  useEffect(() => console.log('Provider state', contextValue.employees))

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  )
}
