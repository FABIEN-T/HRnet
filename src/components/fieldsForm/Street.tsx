// @ts-nocheck

import { useFormContext } from 'react-hook-form'

function Street() {
  const {
    register,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />

  return (
    <div className="inputContainer">
      <div className="labelError">
        <label htmlFor="streetId">Street</label>
        <p className="inputError">{errors.street?.message}</p>
      </div>
      <input
        name="street"
        id="streetId"
        {...register('street', {
          // Validation rules
          maxLength: { value: 100, message: 'max : 100 characters' },
          required: 'This field is required',
          pattern: {
            value: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ'0-9,]+$/g,
            message: 'Alphabetical characters only',
          },
        })}
      />
    </div>
  )
}

export default Street
