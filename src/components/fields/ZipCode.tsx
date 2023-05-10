// @ts-nocheck

import { useFormContext } from 'react-hook-form'

function ZipCode() {
  const {
    register,
    formState: { errors },
  } = useFormContext() // retrieve hook methods

  return (
    <div className="inputContainer">
      <div className="labelError">
        <label htmlFor="zipcode">Zip Code</label>
        <p className="inputError">{errors.zipcode?.message}</p>
      </div>

      <input
        name="street"
        {...register('zipcode', {
          required: 'This field is required',
          pattern: {
            value: /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/g,
            message: '5 digits are required',
          },
        })}
      />
    </div>
  )
}

export default ZipCode
