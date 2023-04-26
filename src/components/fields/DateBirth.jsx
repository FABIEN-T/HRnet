// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateBirth() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // retrieve hook methods
  return (
    <div className="inputContainer">
      <label htmlFor="dateBirth">Date of Birth</label>
      <Controller
        control={control}
        name="dateBirth"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <DatePicker
            className="input"
            name="dateBirth"
            selected={field.value}
            dateFormat="MM/dd/yyyy"
            onChange={field.onChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            closeOnScroll={true}
            disabledKeyboardNavigation
          />
        )}
      />
      <div className="inputNameError">
        <p className="pErrorName">{errors?.dateBirth?.message}</p>
      </div>
    </div>
  )
}

export default DateBirth
