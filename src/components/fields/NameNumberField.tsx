// @ts-nocheck

import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

// const regexPattern = {
//   nameRegex: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
//   numberRegex: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ'0-9,]+$/g,
//   nameNumberRegex: /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/g,
// }

export default function NameNumberField({ typeField, label }) {
  const {
    register,
    formState: { errors },
    // reset,
  } = useForm({ mode: 'all' })

  return (
    <div className="inputContainer">
      <label htmlFor={typeField}>{label}</label>
      <input
        name={typeField}
        {...register(
          { typeField },
          {
            required: true,
            // pattern: { typeRegex },
          }
        )}
      />
      {/* <div className="inputNameError">
        {(errors?.firstName?.type ||
          errors?.lastName?.type ||
          errors?.street?.type ||
          errors.city?.type ||
          errors?.zipcode?.type) === 'required' && (
          <p className="pErrorName">This field is required</p>
        )}
        {(errors?.firstName?.type ||
          errors?.lastName?.type | errors?.city?.type) === 'pattern' && (
          <p className="pErrorName">Alphabetical characters only</p>
        )}
        {(errors?.firstName?.type ||
          errors?.lastName?.type ||
          errors?.city?.type) === 'pattern' && (
          <p className="pErrorName">Alphabetical characters only</p>
        )}
        {errors?.street?.type === 'pattern' && (
          <p className="pErrorName">Alphabetical characters only</p>
        )}
      </div> */}
    </div>
  )
}

NameNumberField.propTypes = {
  typeField: PropTypes.string,
  label: PropTypes.string,
  typeRegex: PropTypes.instanceOf(RegExp),
}
