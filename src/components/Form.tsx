// @ts-nocheck

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import '../App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { actionToggleEdit } from '../_features/auth.slice.js'
// import { mwUpdateUserProfile } from '../_middlewares/middlewares'
// import { removeState } from '../_utils/stateStorageFunctions'

export default function FormEditName() {
  // const dispatch = useDispatch()
  //   const { firstName, lastName, isRememberMe } = useSelector(
  //     (state) => state.auth
  //   )
  // récupération des élements du state
  const [startDate, setStartDate] = useState()
  const [dateBirth, setDateBirth] = useState()
  //   const defaultValues = {
  //     ReactDatepicker: new Date(),
  //   }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const save = (data) => {
    console.log(
      data,
      data.dateBirth ? data.dateBirth.toLocaleDateString() : null,
      data.dateBirth ? data.dateBirth.getMonth() : null,
      data.dateBirth ? data.dateBirth.getFullYear() : null
    )
    // const updateData = {
    //   firstName: data.firstName ? data.firstName : firstName,
    //   lastName: data.lastName ? data.lastName : lastName,
    // }
    // appel de l'action "toggle" d'ouverture/fermeture du formulaire d'édition
    // dispatch(actionToggleEdit())
    // appel de la fonction de modification du prénom et du nom de l'utilisateur dans la base de données
    // dispatch(mwUpdateUserProfile(updateData, isRememberMe))
    // removeState()
  }

  return (
    <form id="external-form">
      <div className="inputName-wrapper inputName-wrapper-column">
        <div className="inputContainer">
          <label htmlFor="firstName">Last Name</label>
          <input
            name="firstName"
            placeholder="enter your firstname"
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
            placeholder="enter your lastname"
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
        {/* <div className="inputContainer">
          <label htmlFor="dateBirth">Date of Birth</label>
          <DatePicker
            selected={dateBirth}
            onChange={(date) => {
              setDateBirth(date)
            }}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="dateStart">Start Date</label>
        </div> */}
        <section>
          <label htmlFor="dateBirth">Date of Birth</label>
          <Controller
            control={control}
            name="dateBirth"
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                // placeholderText="Select date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                dateFormat="MM/dd/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                required
                form="external-form"
              />
            )}
          />
        </section>
        <section>
          <label htmlFor="dateStart">Start Date</label>
          <Controller
            control={control}
            name="dateStart"
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                // placeholderText="Select date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
                dateFormat="MM/dd/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                required
                form="external-form"
              />
            )}
          />
        </section>
      </div>

      <div className="inputName-wrapper">
        <button className="edit-button" onClick={handleSubmit(save)}>
          Save
        </button>
      </div>
    </form>
  )
}
