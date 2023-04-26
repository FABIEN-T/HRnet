// @ts-nocheck

import { useFormContext } from 'react-hook-form'

function City() {
  const {
    register,
    formState: { errors },
  } = useFormContext() // retrieve hook methods

  return (
    <div className="inputContainer">
      <label>City</label>
      <input
        {...register('city', {
          minLength: { value: 2, message: '2<Length<30' },
          maxLength: { value: 30, message: '2<Length<30' },
          required: 'This field is required',
          pattern: {
            value: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
            message: 'Alphabetical characters only',
          },
        })}
      />
      <div className="inputNameError">
        <p className="error">{errors.city?.message}</p>
      </div>
    </div>
  )
}

export default City
