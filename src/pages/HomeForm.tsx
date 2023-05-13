// @ts-nocheck

// import '../homeForm.css'
import '../App.css'
import {
  lazy,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Modal } from 'fv-modal-react'

import EmployeeContext from '../utilsContextProvider/EmployeeContextProvider'
import memoryListEmployees from '../utilsContextProvider/memoryListEmployees'
import { initialState } from '../utilsContextProvider/employeeReducer'

import Header from '../components/Header'
import FirstName from '../components/fieldsForm/FirstName'
import LastName from '../components/fieldsForm/LastName'
// import DateBirth from '../components/fields/DateBirth'
const DateBirth = lazy(() => import('../components/fieldsForm/DateBirth'))
import DateStart from '../components/fieldsForm/DateStart'
import Address from '../components/fieldsForm/Address'
import SelectDepartement from '../components/fieldsForm/SelectDepartement'
import MyModal from '../components/MyModal'

let tempFirstName = ''
let tempLastName = ''

// function initState() {
//   initialState = memoryListEmployees
// }
const bidule = []

export default function HomeForm() {
  // initState()
  const [isOpen, setIsOpen] = useState(false)
  const { employees, addToEmployeesList } = useContext(EmployeeContext)

  const defaultValues = {
    //   firstName: '',
    //   lastName: '',
    //   city: '',
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues,
    mode: 'onSubmit', // onChange | onBlur | onSubmit | onTouched | all
  })

  const save = (data) => {
    tempFirstName = data.firstName
    tempLastName = data.lastName

    setIsOpen(true)
    // const employees = JSON.parse(localStorage.getItem('employees')) || []
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
    // console.log('Homeform employee', employee)
    // employees.push(employee)
    // localStorage.setItem('employees', JSON.stringify(employees))
    addToEmployeesList(employee)
    memoryListEmployees.push(employee)
    console.log('memoryListEmployees', memoryListEmployees)
    // bidule.push(employee)
    // console.log('bidule', bidule)
  }

  useEffect(() => {
    console.log('*****************')
    employees.map((employee) => console.log('HomeForm', employee.firstName))
  })

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
            <button className="edit-button" onClick={handleSubmit(save)}>
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
