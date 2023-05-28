// @ts-nocheck

import '../App.css'
import { useState, useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import EmployeeContext from '../utilsContextProvider/EmployeeContextProvider'

import Header from '../components/Header'
import FirstName from '../components/fieldsForm/FirstName'
import LastName from '../components/fieldsForm/LastName'
import DateBirth from '../components/fieldsForm/DateBirth'
import DateStart from '../components/fieldsForm/DateStart'
import Address from '../components/fieldsForm/Address'
import SelectDepartement from '../components/fieldsForm/SelectDepartement'
import CustomModal from '../components/CustomModal'

let tempFirstName = ''
let tempLastName = ''

export default function CreateEmployee() {
  const [isOpen, setIsOpen] = useState(false) // isOpen manages the state of the modal
  const { dispatch } = useContext(EmployeeContext)

  const defaultValues = {}

  // Declaration of the methods used by useForm of the React Hook Form library
  const {
    // control : Methods for registering components into React Hook Form
    control,
    // register : This method allows to register an input or select element
    // and apply validation rules to React Hook Form
    register,
    // handleSubmit : This function will receive the form data if form validation is successful
    handleSubmit,
    // formState : This object contains information about the entire form state.
    formState: { errors },
    // watch : This method will watch specified inputs and return their values.
    watch,
    // reset : Reset the entire form state, fields reference, and subscriptions.
    reset,
  } = useForm({
    defaultValues,
    mode: 'onSubmit', // Render (options : onChange | onBlur | onSubmit | onTouched | all)
  })

  // When the user clicks on the 'Save' button...
  const save = (data) => {
    // ...The first and last names are retrieved to be displayed in the modal.
    tempFirstName = data.firstName
    tempLastName = data.lastName

    // ...The modal is open
    setIsOpen(true)

    // ...The employee object created is built from the data entered in the form.
    const employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      startDate: data.dateStart.toLocaleDateString(),
      department: data.selectDepartement.value,
      dateOfBirth: data.dateBirth.toLocaleDateString(),
      street: data.street,
      city: data.city,
      state: data.selectState.abbreviation,
      zipCode: data.zipcode,
    }

    // ...The 'CREATE_EMPLOYEE' type action is sent to the useReducer to apply the logic: add the new employee to state
    dispatch({
      type: 'CREATE_EMPLOYEE',
      payload: employee,
    })

    // ...Reset the form
    reset({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      zipcode: null,
    })
  }

  return (
    <div className="createEmployee">
      <Header
        link="/employee-list"
        nameLink="View Current Employees"
        title="Create Employee"
      />
      {/* FormProvider (component of react-hook-form) allows to recover the data of the different components: <FirstName />, <LastName /> etc...*/}
      <FormProvider
        {...{
          control,
          register,
          formState: { errors },
        }}
      >
        <form>
          <FirstName />
          <LastName />
          <DateBirth />
          <DateStart />
          <Address />
          <SelectDepartement />
          <div className="buttonDiv">
            <button className="edit-button" onClick={handleSubmit(save)}>
              Save
            </button>
          </div>
        </form>
        {/* If isOpen is true, the modal is displayed */}
        {isOpen && (
          <CustomModal
            setIsOpen={setIsOpen}
            tempFirstName={tempFirstName}
            tempLastName={tempLastName}
          />
        )}
      </FormProvider>
    </div>
  )
}
