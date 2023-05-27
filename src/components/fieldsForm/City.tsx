// @ts-nocheck

import { useFormContext } from 'react-hook-form'

function City() {
  const {
    register,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />

  return (
    <div className="inputContainer">
      <div className="labelError">
        <label htmlFor="cityId">City</label>
        <div className="inputError">
          <p className="error">{errors.city?.message}</p>
        </div>
      </div>

      <input
        name="city"
        id="cityId"
        {...register('city', {
          // Validation rules
          minLength: { value: 2, message: '2<Length<30' },
          maxLength: { value: 30, message: '2<Length<30' },
          required: 'This field is required',
          pattern: {
            value: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
            message: 'Alphabetical characters only',
          },
        })}
      />
    </div>
  )
}

export default City
