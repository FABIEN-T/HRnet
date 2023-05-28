// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateStart() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />
  return (
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="dateStartId">Start Date</label>
        <p className="inputError">{errors?.dateStart?.message}</p>
      </div>
      <Controller // Component of the 'react-hook-form' librairie
        control={control}
        name="dateStart"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <DatePicker // Component of the 'react-datepicker' librairie
            className="inputDate"
            name="dateStart"
            id="dateStartId"
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
