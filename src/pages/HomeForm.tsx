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

import usePersistState from '../persistState/usePersistState'

// When setting values, they will now save to the state and also update the store in the browser.
// setUserData({
//   email: 'example@example.com',
//   token: '123abc...',
// })

let tempFirstName = ''
let tempLastName = ''

export default function HomeForm() {
  const [isOpen, setIsOpen] = useState(false)
  // you can also optionally pass a default value which will be overwritten if the store already exists.
  const [userData, setUserData] = usePersistState('employees', [])
  console.log('userData', userData)

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
    const employees = userData
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
    // console.log(employee)
    // When setting values, they will now save to the state and also update the store in the browser.
    employees.push(employee)
    setUserData(employees)
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
