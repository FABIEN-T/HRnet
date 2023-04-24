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
    setIsOpen(true)
    localStorage.setItem('employee', data)
    console.log(
      data
      // data.dateBirth ? data.dateBirth.toLocaleDateString() : null,
    )
  }

  return (
    <>
      <div className="createEmployee">
        {/* <div> */}
        <h1>HRnet</h1>
        <h2>Create Employee</h2>
        <form id="external-form">
          <div className="inputName-wrapper">
            <div className="inputContainer">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                {...register('firstName', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
                })}
              />
              <div className="inputNameError">
                {errors?.firstName?.type === 'required' && (
                  <p className="pErrorName">This field is required</p>
                )}
                {errors?.firstName?.type === 'maxLength' && (
                  <p className="pErrorName">Cannot exceed 20 characters</p>
                )}
                {errors?.firstName?.type === 'pattern' && (
                  <p className="pErrorName">Alphabetical characters only</p>
                )}
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
              <div className="inputNameError">
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
              <div className="inputNameError">
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
              <div className="inputNameError">
                {errors?.dateStart?.type === 'required' && (
                  <p className="pErrorName">This field is required</p>
                )}
              </div>
            </section>
            <div className="frame">
              <p className="pAddress">Address</p>
              <div className="address">
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
                  <div className="inputNameError">
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
                  <div className="inputNameError">
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
                  <div className="inputNameError">
                    {errors?.selectState?.type === 'required' && (
                      <p className="pErrorName">This field is required</p>
                    )}
                  </div>
                </div>
                <div className="inputContainer">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    name="zipcode"
                    type="number"
                    {...register('zipcode', {
                      required: true,
                      pattern:
                        /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/g,
                    })}
                  />
                  <div className="inputNameError">
                    {errors?.zipcode?.type === 'required' && (
                      <p className="pErrorName">This field is required</p>
                    )}
                    {errors?.zipcode?.type === 'pattern' && (
                      <p className="pErrorName">5 digits are required</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
              <div className="inputNameError">
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
          text={provifirstname + provilastName + 'is saved'}
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
