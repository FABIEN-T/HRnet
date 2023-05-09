// @ts-nocheck

  
const employeeReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "CREATE_EMPLOYEE") {
    return {
      ...state,
      // employees: payload
      employees: state.employees.concat(payload)
    };
  }
  
  // switch (type) {
  //       case "CREATE_EMPLOYEE":
  //       // console.log("CREATE_EMPLOYEE payload", payload);  
  //       return {
  //         ...state,
  //         employees: payload
  //         // employees: state.employees.concat(payload)
  //       };
      
  //     // case "REMOVE_EMPLOYEE":
  //     //   console.log("REMOVE_EMPLOYEE", payload);  
  //     //   return {
  //     //     ...state,
  //     //     employees: payload.employees
  //     //   };
      
  //     // case "UPDATE_EMPLOYEE":
  //     //   console.log("UPDATE_EMPLOYEE", payload);  
  //     //   return {
  //     //     ...state,
  //     //     employees: payload.employees
  //     //   };
      
  //     default:
  //       throw new Error(`No case for type ${type} found in employeeReducer.`);
  //   }
  };
  
export default employeeReducer;
  