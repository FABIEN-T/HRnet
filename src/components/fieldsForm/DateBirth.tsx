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
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="dateBirth">Date of Birth</label>
        <p className="inputError">{errors?.dateBirth?.message}</p>
      </div>
      <Controller
        control={control}
        name="dateBirth"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <DatePicker
            className="inputDate"
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
    </div>
  )
}

export default DateBirth
