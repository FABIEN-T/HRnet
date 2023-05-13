// @ts-nocheck

// import memoryListEmployees from './memoryListEmployees'
// console.log('memoryListEmployees', memoryListEmployees)

const initialState = {
  employees: [
    {
      firstName: 'Tony',
      lastName: 'Stark',
      startDate: '10/03/2009',
      department: 'Marketing',
      dateOfBirth: '02/05/2023',
      street: '152, Sunset boulevard',
      city: 'Los Angeles',
      state: 'AK',
      zipCode: '90000',
    },
    {
      firstName: 'Steve',
      lastName: 'Rogers',
      startDate: '24/03/2009',
      department: 'Marketing',
      dateOfBirth: '09/04/1970',
      street: '362, 5e avenue',
      city: 'New York',
      state: 'AL',
      zipCode: '10001',
    },
    {
      firstName: 'Yvette',
      lastName: 'Stark',
      startDate: '10/03/2009',
      department: 'Engineering',
      dateOfBirth: '11/08/1981',
      street: '152, Sunset boulevard',
      city: 'Los Angeles',
      state: 'AL',
      zipCode: '90000',
    },
  ],
}

// const initialState = memoryListEmployees

export {initialState}
  
const employeeReducer = (state, action) => {
  const { type, payload } = action

  if (type === "CREATE_EMPLOYEE") {
    return {
      ...state,
      employees: state.employees.concat(payload)
    }
  }
}
  
export default employeeReducer;
  
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