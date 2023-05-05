// @ts-nocheck

export const initialState = {
  employees: []
  };
  
  const employeeReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case "CREATE_EMPLOYEE":
        console.log("CREATE_EMPLOYEE", payload);  
        return {
          ...state,
          employees: payload.employees
        };
      
      // case "REMOVE_EMPLOYEE":
      //   console.log("REMOVE_EMPLOYEE", payload);  
      //   return {
      //     ...state,
      //     employees: payload.employees
      //   };
      
      // case "UPDATE_EMPLOYEE":
      //   console.log("UPDATE_EMPLOYEE", payload);  
      //   return {
      //     ...state,
      //     employees: payload.employees
      //   };
      
      default:
        throw new Error(`No case for type ${type} found in employeeReducer.`);
    }
  };
  
  export default employeeReducer;
  