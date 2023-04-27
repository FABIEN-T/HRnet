// @ts-nocheck

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import { labelDepartement, labelStates } from '../datasSelect/selectLabel'

// import NameNumberField from './fields/NameNumberField'

import { Modal } from 'fv-modal-react'
// import '../../node_modules/fv-modal-react/dist/style.css'
// import 'fv-modal-react/dist/style.css'

import '../App.css'

const nameRegex = new RegExp(/^[a-zA-Zs-À-ÖØ-öø-ÿ']+$/g)
const numberRegex = new RegExp(/^[a-zA-Zs-À-ÖØ-öø-ÿ'0-9,]+$/g)
const nameNumberRegex = new RegExp(
  /^((d{5}-d{4})|(d{5})|([A-Z]d[A-Z]sd[A-Z]d))$/g
)

const provifirstname = 'Louis '
const provilastName = 'Douze '
let tempFirstName = ''
let tempLastName = ''

export default function Form() {
  // récupération des élements du state
  // const [dateStart, setDateStart] = useState(null)
  // const [dateBirth, setDateBirth] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  // console.log('regex', nameNumberRegex)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({ mode: 'all' })

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
    <>
      <div className="createEmployee">
        {/* <div> */}
        <h1>HRnet</h1>
        <h2>Create Employee</h2>
        <form>
          <div className="inputName-wrapper">
            <div className="inputContainer">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                {...register('firstName', {
                  required: 'This field is required',
                  // maxLength: 20,
                  maxLength: {
                    value: 20,
                    message: 'Max length is 20',
                  },
                  // pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
                  pattern: {
                    value: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
                    message: 'Alphabetical characters only',
                  },
                })}
              />
              <div className="inputError">
                {errors?.firstName && <p>{errors.firstName.message}</p>}
                {/* {errors?.firstName?.type === 'required' && (
                  <p className="pErrorName">This field is required</p>
                )}
                {errors?.firstName?.type === 'maxLength' && (
                  <p className="pErrorName">Cannot exceed 20 characters</p>
                )}
                {errors?.firstName?.type === 'pattern' && (
                  <p className="pErrorName">Alphabetical characters only</p>
                )} */}
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                {...register('lastName', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
                })}
              />
              <div className="inputError">
                {errors?.lastName?.type === 'required' && (
                  <p className="pErrorName pLastName">This field is required</p>
                )}
                {errors?.lastName?.type === 'maxLength' && (
                  <p className="pErrorName pLastName">
                    Cannot exceed 20 characters
                  </p>
                )}
                {errors?.lastName?.type === 'pattern' && (
                  <p className="pErrorName pLastName">
                    Alphabetical characters only
                  </p>
                )}
              </div>
            </div>

            <section>
              <label htmlFor="dateBirth">Date of Birth</label>
              <Controller
                control={control}
                name="dateBirth"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    className="input"
                    name="dateBirth"
                    selected={field.value}
                    dateFormat="MM/dd/yyyy"
                    onChange={field.onChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    closeOnScroll={true}
                    disabledKeyboardNavigation
                  />
                )}
              />
              <div className="inputError">
                {errors?.dateBirth?.type === 'required' && (
                  <p className="pErrorName">This field is required</p>
                )}
              </div>
            </section>
            <section>
              <label htmlFor="dateStart">Start Date</label>
              <Controller
                control={control}
                name="dateStart"
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    className="input"
                    name="dateStart"
                    selected={field.value}
                    dateFormat="MM/dd/yyyy"
                    onChange={field.onChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    closeOnScroll={true}
                    disabledKeyboardNavigation
                  />
                )}
              />
              <div className="inputError">
                {errors?.dateStart?.type === 'required' && (
                  <p className="pErrorName">This field is required</p>
                )}
              </div>
            </section>
            {/* <div className="frame"> */}
            <fieldset>
              <legend> Address </legend>
              {/* <p className="pAddress">Address</p> */}
              {/* <div className="address"> */}
              <div>
                <div className="inputContainer">
                  <label htmlFor="street">Street</label>
                  <input
                    name="street"
                    {...register('street', {
                      required: true,
                      maxLength: 60,
                      pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ'0-9,]+$/g,
                    })}
                  />
                  <div className="inputError">
                    {errors?.street?.type === 'required' && (
                      <p className="pErrorName">This field is required</p>
                    )}
                    {/* {errors?.street?.type === 'maxLength' && (
                  <p className="pErrorName">Cannot exceed 60 characters</p>
                )} */}
                    {errors?.street?.type === 'pattern' && (
                      <p className="pErrorName">Alphabetical, numbers only</p>
                    )}
                  </div>
                </div>
                <div className="inputContainer">
                  <label htmlFor="city">City</label>
                  <input
                    name="city"
                    {...register('city', {
                      required: true,
                      maxLength: 30,
                      pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
                    })}
                  />
                  <div className="inputError">
                    {errors?.city?.type === 'required' && (
                      <p className="pErrorName">This field is required</p>
                    )}
                    {errors?.city?.type === 'maxLength' && (
                      <p className="pErrorName">Cannot exceed 60 characters</p>
                    )}
                    {errors?.city?.type === 'pattern' && (
                      <p className="pErrorName">Alphabetical characters only</p>
                    )}
                  </div>
                </div>
                <div className="inputContainer">
                  <label htmlFor="selectState">State</label>
                  <Controller
                    control={control}
                    name="selectState"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        className="input"
                        name="selectState"
                        defaultValue={null}
                        selected={field.value}
                        onChange={field.onChange}
                        options={labelStates}
                      />
                    )}
                  />
                  <div className="inputError">
                    {errors?.selectState?.type === 'required' && (
                      <p className="pErrorName">This field is required</p>
                    )}
                  </div>
                </div>
                <div className="inputContainer">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    name="zipCode"
                    type="number"
                    {...register('zipCode', {
                      required: true,
                      pattern:
                        /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/g,
                    })}
                  />
                  <div className="inputError">
                    {errors?.zipCode?.type === 'required' && (
                      <p className="pErrorName">This field is required</p>
                    )}
                    {errors?.zipCode?.type === 'pattern' && (
                      <p className="pErrorName">5 digits are required</p>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>
            {/* </div> */}
            <div className="inputContainer">
              <label htmlFor="selectDepartement">Departement</label>
              <Controller
                control={control}
                name="selectDepartement"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    className="input"
                    name="selectDepartement"
                    defaultValue={null}
                    selected={field.value}
                    onChange={field.onChange}
                    options={labelDepartement}
                  />
                )}
              />
              <div className="inputError">
                {errors?.selectDepartement?.type === 'required' && (
                  <p className="pErrorName">This field is required</p>
                )}
              </div>
            </div>
          </div>

          <div className="buttonDiv">
            <button className="edit-button" onClick={handleSubmit(save)}>
              Save
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
      {/* <NameNumberField typeField={'firstName'} label={'Prénom'} /> */}
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
    </>
  )
}
