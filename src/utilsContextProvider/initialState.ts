// @ts-nocheck


let initialState = {
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

// let initialState = myInitialState


// console.log("localStorage", localStorage.getItem('employees'))

// function init() {
//   const getLocalStorage = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : []
//   console.log("localStorage", getLocalStorage)
//   const getLocalStorageLength = (getLocalStorage === null) ? 0 : getLocalStorage.length    
//   const initialState = (myInitialState.length < getLocalStorageLength) ? getLocalStorage : myInitialState
//   console.log("init()", initialState)
// }

// init()

export default initialState