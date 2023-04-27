// @ts-nocheck

import React, { useState } from 'react'
// import { TextField } from "@material-ui/core";
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { labelDepartement, labelStates } from '../datasSelect/selectLabel'

function SelectRequired() {
  const [selectedOption, setSelectedOption] = useState('')
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  // const eff = [...labelStates]
  // for (let i = 0; i < eff.length; i++) {
  //   Reflect.deleteProperty(eff[i], 'abbreviation')
  // }
  // console.log(eff)

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="select">Select</label>
      <Controller
        control={control}
        name="select"
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            className="input"
            name="select"
            defaultValue={selectedOption}
            selected={field.value}
            onChange={field.onChange}
            options={labelStates}
            // options={labelDepartement}
          />
        )}
      />
      <div className="inputError">
        {errors?.select?.type === 'required' && (
          <p className="pErrorName">This field is required</p>
        )}
      </div>
      <button type="submit">Boom</button>
    </form>
  )
}

export default SelectRequired
