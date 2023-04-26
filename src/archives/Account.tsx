// @ts-nocheck

import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../App.css'

function Account() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' })

  const save = (data) => {
    console.log(data)
  }

  return (
    <div>
      <label htmlFor="dateBirth">Date of Birth</label>
      <Controller
        control={control}
        name="birthDate"
        rules={{ required: true }}
        render={({ field }) => (
          <DatePicker
            className="input"
            name="birthDate"
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
      {/* {errors.birthdate && (
        <p className="text-red-600 text-sm cursor-default">
          {errors.birthdate.message}
        </p>
      )} */}
      {errors?.birthDate?.type === 'required' && (
        <p className="pErrorName pLastName">This field is required</p>
      )}
      <div className="inputName-wrapper">
        <button className="edit-button" onClick={handleSubmit(save)}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Account
