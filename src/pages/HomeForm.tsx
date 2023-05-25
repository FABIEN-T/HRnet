// @ts-nocheck

// import '../homeForm.css'
import '../App.css'
import { lazy, useState, useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import EmployeeContext from '../utilsContextProvider/EmployeeContextProvider'

import Header from '../components/Header'
import FirstName from '../components/fieldsForm/FirstName'
import LastName from '../components/fieldsForm/LastName'
import DateBirth from '../components/fieldsForm/DateBirth'
// const DateBirth = lazy(() => import('../components/fieldsForm/DateBirth'))
import DateStart from '../components/fieldsForm/DateStart'
// const DateStart = lazy(() => import('../components/fieldsForm/DateStart'))
import Address from '../components/fieldsForm/Address'
import SelectDepartement from '../components/fieldsForm/SelectDepartement'
import MyModal from '../components/MyModal'

let tempFirstName = ''
let tempLastName = ''

export default function HomeForm() {
  const [isOpen, setIsOpen] = useState(false)
  const { addToEmployeesList } = useContext(EmployeeContext)

  const defaultValues = {}

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues,
    mode: 'onSubmit', // onChange | onBlur | onSubmit | onTouched | all
  })

  const save = (data) => {
    tempFirstName = data.firstName
    tempLastName = data.lastName

    setIsOpen(true)

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
    console.log('save employee', employee)
    addToEmployeesList(employee)
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
      <FormProvider
        {...{
          control,
          register,
          handleSubmit,
          formState: { errors },
          watch,
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
            <button
              // type="reset"
              className="edit-button"
              onClick={handleSubmit(save)}
            >
              Save
            </button>
          </div>
        </form>
        {isOpen && (
          <MyModal
            setIsOpen={setIsOpen}
            tempFirstName={tempFirstName}
            tempLastName={tempLastName}
          />
        )}
      </FormProvider>
    </div>
  )
}
