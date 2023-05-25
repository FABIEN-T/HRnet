// @ts-nocheck

const employeeReducer = (state, action) => {
  const { type, payload } = action
  console.log("CREATE_EMPLOYEE", payload)
  if (type === "CREATE_EMPLOYEE") {    
    return {
      ...state,
      employees: state.employees.concat(payload),      
    }
  }
  if (type === "REFRESH") {    
    return {
      employees: JSON.parse(localStorage.getItem('employees')),      
    }
  }
}
  
export default employeeReducer;
  