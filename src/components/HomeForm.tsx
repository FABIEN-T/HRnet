// @ts-nocheck

import '../App.css'
// import '../styles.css'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import FirstName from './fields/FirstName'
import LastName from './fields/LastName'
import Street from './fields/Street'
import City from './fields/City'
import ZipCode from './fields/ZipCode'
import DateBirth from './fields/DateBirth'
import DateStart from './fields/DateStart'
import SelectState from './fields/SelectState'
import SelectDepartement from './fields/SelectDepartement'

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
      <h1>HRnet</h1>
      <h2>Create Employee</h2>
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
          className="form"
        >
          <FirstName />
          <LastName />
          <DateBirth />
          <DateStart />
          <fieldset>
            <legend>Adress</legend>
            <div>
              <Street />
              <City />
              <SelectState />
              <ZipCode />
            </div>
          </fieldset>
          <SelectDepartement />
          {/* <input type="submit" value="Pointe" /> */}
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
            modalBgColor={'blue'}
            modalBorder={'3px solid white'}
            modalBorderRadius={'20px'}
            crossCloseBg={'red'}
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
