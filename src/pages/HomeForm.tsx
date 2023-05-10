// @ts-nocheck

// import '../homeForm.css'
import '../App.css'
import { useState, useMemo, useCallback, useEffect, useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { lazy } from 'react'

// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

import EmployeeContext from '../utils/EmployeeContextProvider'
import Header from '../components/Header'
import FirstName from '../components/fields/FirstName'
import LastName from '../components/fields/LastName'
// import DateBirth from '../components/fields/DateBirth'
const DateBirth = lazy(() => import('../components/fields/DateBirth'))
import DateStart from '../components/fields/DateStart'
import Address from '../components/fields/Address'
import SelectDepartement from '../components/fields/SelectDepartement'

import { Modal } from 'fv-modal-react'
// import useEmployee from '../utils/EmployeeContext'

let tempFirstName = ''
let tempLastName = ''

export default function HomeForm() {
  const [isOpen, setIsOpen] = useState(false)
  const { employees, addToEmployeesList } = useContext(EmployeeContext)

  const defaultValues = {
    firstName: '',
    lastName: '',
    city: '',
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
          <Modal
            setIsOpen={setIsOpen}
            text={tempFirstName + ' ' + tempLastName + ' is saved.'}
            modalBgColor={'#576c05'}
            modalBorder={'3px solid white'}
            modalBorderRadius={'20px'}
            crossCloseBg={'#2b3603'}
            crossCloseColor={'white'}
            crossCloseBorder={'3px solid white'}
            fontFamily={'Trebuchet MS'}
            fontSize={'20px'}
            fontColor={'white'}
            textAlign={'left'}
          />
        )}
      </FormProvider>
    </div>
  )
}
