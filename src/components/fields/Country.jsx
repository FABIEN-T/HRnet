// @ts-nocheck

import { useFormContext } from 'react-hook-form'

const Country = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext() // retrieve hook methods

  return (
    <>
      <label>PROVI </label>
      <div className="cityWrapper">
        <select {...register('bidule', { required: 'Please select city' })}>
          <option value="">Select</option>
          <option value="Hongkong">Hongkong</option>
          <option value="Shenzhen">Shenzhen</option>
          <option value="Shanghai">Shanghai</option>
        </select>
      </div>
      <p className="error">{errors.city?.message}</p>
    </>
  )
}
export default Country
