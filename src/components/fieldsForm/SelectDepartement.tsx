// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import Select from 'react-select'
import { labelDepartement } from '../../datasSelect/selectLabel'

function SelectDepartement() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // retrieve hook methods
  return (
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="selectDepartementId">Departement</label>
        <p className="inputError">{errors.selectDepartement?.message}</p>
      </div>
      <Controller
        control={control}
        name="selectDepartement"
        // id="selectDepartementId"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <Select
            className="input"
            name="selectDepartement"
            id="selectDepartementId"
            defaultValue={null}
            selected={field.value}
            onChange={field.onChange}
            options={labelDepartement}
          />
        )}
      />
    </div>
  )
}

export default SelectDepartement
