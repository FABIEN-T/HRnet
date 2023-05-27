// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import Select from 'react-select'
import { labelStates } from '../../datasSelect/selectLabel'

function SelectState() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />
  return (
    <div className="inputContainer">
      <div className="labelError">
        <label htmlFor="selectStateId">State</label>
        <p className="inputError">{errors?.selectState?.message}</p>
      </div>

      <Controller
        control={control}
        name="selectState"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <Select // Component of the 'react-select' librairie
            className="input"
            name="selectState"
            id="selectStateId"
            defaultValue={null}
            selected={field.value}
            onChange={field.onChange}
            options={labelStates}
          />
        )}
      />
    </div>
  )
}

export default SelectState
