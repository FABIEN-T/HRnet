// @ts-nocheck

import { useFormContext } from 'react-hook-form'

function Street() {
  const {
    register,
    formState: { errors },
  } = useFormContext() // retrieve hook methods

  return (
    <div className="inputContainer">
      <label htmlFor="street">Street</label>
      <input
        name="street"
        {...register('street', {
          maxLength: { value: 100, message: 'max : 100 characters' },
          required: 'This field is required',
          pattern: {
            value: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ'0-9,]+$/g,
            message: 'Alphabetical characters only',
          },
        })}
      />
      <div className="inputNameError">
        <p className="error">{errors.street?.message}</p>
      </div>
    </div>
  )
}

export default Street
