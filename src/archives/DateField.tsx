// @ts-nocheck

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function DateField() {
  return (
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
  )
}
