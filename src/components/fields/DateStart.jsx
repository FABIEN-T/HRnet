// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateStart() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // retrieve hook methods
  return (
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="dateBirth">Start Date</label>
        <p className="inputError">{errors?.dateStart?.message}</p>
      </div>
      <Controller
        control={control}
        name="dateStart"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <DatePicker
            className="inputDate"
            name="dateStart"
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

export default DateStart
