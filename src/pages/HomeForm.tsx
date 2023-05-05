// @ts-nocheck

import './homeForm.css'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { lazy } from 'react'

// const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

import Header from '../components/Header'
import FirstName from '../components/fields/FirstName'
// const FirstName = lazy(() => import('../components/fields/FirstName'))
import LastName from '../components/fields/LastName'
import Street from '../components/fields/Street'
import City from '../components/fields/City'
import ZipCode from '../components/fields/ZipCode'
// import DateBirth from '../components/fields/DateBirth'
const DateBirth = lazy(() => import('../components/fields/DateBirth'))
import DateStart from '../components/fields/DateStart'
// const DateStart = lazy(() => import('../components/fields/DateStart'))
import SelectState from '../components/fields/SelectState'
import SelectDepartement from '../components/fields/SelectDepartement'

import { Modal } from 'fv-modal-react'
import useEmployee from '../state/EmployeeContext'

let tempFirstName = ''
let tempLastName = ''

export default function HomeForm() {
  const [isOpen, setIsOpen] = useState(false)
  const { employees } = useEmployee()

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
    console.log(employee)
    // employees.push(employee)
    // localStorage.setItem('employees', JSON.stringify(employees))
    addToEmployeesList(employee)
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
        <form
        // onSubmit={handleSubmit((data) => {
        //   console.log('Values', data)
        // })}
        >
          <FirstName />
          <LastName />
          <DateBirth />
          <DateStart />
          <fieldset>
            <legend>Address</legend>
            <div>
              <Street />
              <City />
              <SelectState />
              <ZipCode />
            </div>
          </fieldset>
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
