// @ts-nocheck

import { useFormContext } from 'react-hook-form'

function FirstName() {
  const {
    register,
    formState: { errors },
  } = useFormContext() // retrieve hook methods

  return (
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="firstNameId">First Name</label>
        <p className="inputError">{errors.firstName?.message}</p>
      </div>
      <input
        // name="firstName"
        id="firstNameId"
        {...register('firstName', {
          minLength: { value: 2, message: '2<Length<20' },
          maxLength: { value: 20, message: '2<Length<20' },
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

export default FirstName
