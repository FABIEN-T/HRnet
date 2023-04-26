// @ts-nocheck

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { labelDepartement, labelStates } from '../datasSelect/selectLabel'

export default function SelectField() {
  return (
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
  )
}
