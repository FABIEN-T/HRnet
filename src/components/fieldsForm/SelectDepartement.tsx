// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import Select from 'react-select'
import { labelDepartement } from '../../datasSelect/selectLabel'

function SelectDepartement() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />
  return (
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="selectDepartementId">Departement</label>
        <p className="inputError">{errors.selectDepartement?.message}</p>
      </div>
      <Controller // Component of the 'react-hook-form' librairie
        control={control}
        name="selectDepartement"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <Select // Component of the 'react-select' librairie
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
