// @ts-nocheck

import './homeForm.css'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import Header from '../components/Header'
import FirstName from '../components/fields/FirstName'
import LastName from '../components/fields/LastName'
import Street from '../components/fields/Street'
import City from '../components/fields/City'
import ZipCode from '../components/fields/ZipCode'
import DateBirth from '../components/fields/DateBirth'
import DateStart from '../components/fields/DateStart'
import SelectState from '../components/fields/SelectState'
import SelectDepartement from '../components/fields/SelectDepartement'

import { Modal } from 'fv-modal-react'

let tempFirstName = ''
let tempLastName = ''

export default function HomeForm() {
  const [isOpen, setIsOpen] = useState(false)

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
    mode: 'all', // onChange | onBlur | onSubmit | onTouched | all
  })

  const save = (data) => {
    tempFirstName = data.firstName
    tempLastName = data.lastName

    setIsOpen(true)
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      startDate: data.dateStart.toLocaleDateString(),
      department: data.selectDepartement.value,
      dateOfBirth: data.dateBirth.toLocaleDateString(),
      street: data.street,
      city: data.city,
      state: data.selectState.abbreviation,
      zipCode: data.dateBirth.toLocaleDateString(),
    }
    console.log(employees)
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  return (
    <div className="createEmployee">
      <Header />

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
          onSubmit={handleSubmit((data) => {
            console.log('Values', data)
          })}
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
            modalBgColor={'#f2f6e8'}
            modalBorder={'3px solid #576c05'}
            modalBorderRadius={'20px'}
            crossCloseBg={'#f2f6e8'}
            crossCloseColor={'#576c05'}
            crossCloseBorder={'3px solid #576c05'}
            fontFamily={'Trebuchet MS'}
            fontSize={'20px'}
            fontColor={''}
            textAlign={'left'}
          />
        )}
      </FormProvider>
    </div>
  )
}
