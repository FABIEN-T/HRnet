// @ts-nocheck

const employeeReducer = (state, action) => {
  const { type, payload } = action

  // Add an employee in the state
  if (type === "CREATE_EMPLOYEE") {    
    return {
      ...state,
      employees: [...state.employees, payload],      
    }
  }

  // Put the contents of local storage in the state when refreshing the browser (allows you to keep information)
  if (type === "REFRESH") {    
    return {
      employees: JSON.parse(localStorage.getItem('employees')),      
    }
  }
}
  
export default employeeReducer;
  