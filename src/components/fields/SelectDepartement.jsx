// @ts-nocheck
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
    <div className="inputContainer">
      <label htmlFor="selectDepartement">Departement</label>
      <Controller
        control={control}
        name="selectDepartement"
        rules={{ required: 'This field is required' }}
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
        <p className="error">{errors.selectDepartement?.message}</p>
      </div>
    </div>
  )
}

export default SelectDepartement
