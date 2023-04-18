// @ts-nocheck

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import '../App.css'

export default function FormEditName() {
  // récupération des élements du state
  const [startDate, setStartDate] = useState(null)
  const [dateBirth, setDateBirth] = useState(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    // reset,
  } = useForm()

  const save = (data) => {
    console.log(
      data
      // data.dateBirth ? data.dateBirth.toLocaleDateString() : null,
      // data.dateBirth ? data.dateBirth.getMonth() : null,
      // data.dateBirth ? data.dateBirth.getFullYear() : null
    )
  }

  return (
    <>
      <h1>HRnet</h1>
      <h2>Create Employee</h2>
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

          <section>
            <label htmlFor="dateBirth">Date of Birth</label>
            <Controller
              control={control}
              name="dateBirth"
              render={({ field }) => (
                <DatePicker
                  className="input"
                  // placeholderText="Select date"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  dateFormat="MM/dd/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  required={true}
                  // form="external-form"
                />
              )}
            />
          </section>
          <div>
            <label htmlFor="startDate">Start Date</label>

            <DatePicker
              required={true}
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
                setValue('startDate', date.toLocaleDateString())
              }}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>

        <div className="inputName-wrapper">
          <button className="edit-button" onClick={handleSubmit(save)}>
            Save
          </button>
        </div>
      </form>
    </>
  )
}
