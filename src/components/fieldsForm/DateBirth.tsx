// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateBirth() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // Retrieve hook methods from the <FormProvider />
  return (
    <div className="inputContainer inputPadding">
      <div className="labelError">
        <label htmlFor="dateBirthId">Date of Birth</label>
        <p className="inputError">{errors?.dateBirth?.message}</p>
      </div>
      <Controller
        control={control}
        name="dateBirth"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <DatePicker // Component of the 'react-datepicker' librairie
            className="inputDate"
            name="dateBirth"
            id="dateBirthId"
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
