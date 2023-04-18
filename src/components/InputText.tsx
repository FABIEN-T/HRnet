// import { useForm } from 'react-hook-form'

// const {
//   register,
//   formState: { errors },
// } = useForm()

// export default function InputText({ name }) {
//   return (
//     <div className="inputContainer">
//       <div className="inputNameError">
//         {errors?.name?.type === 'required' && (
//           <p className="pErrorName">This field is required</p>
//         )}
//         {errors?.name?.type === 'maxLength' && (
//           <p className="pErrorName">Cannot exceed 20 characters</p>
//         )}
//         {errors?.name?.type === 'pattern' && (
//           <p className="pErrorName">Alphabetical characters only</p>
//         )}
//       </div>

//       <input
//         name={name}
//         // placeholder="enter your firstname"
//         {...register(
//           { name },
//           {
//             required: true,
//             maxLength: 20,
//             pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
//           }
//         )}
//       />
//     </div>
//   )
// }

// import React, { useState } from 'react'
// import DatePicker from 'react-datepicker'

// import 'react-datepicker/dist/react-datepicker.css'

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const Example = () => {
//   const [startDate, setStartDate] = useState(new Date())
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   )
// }

// export default Example

// @ts-nocheck

import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TextField } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

export default function Example() {
  const [startDate, setStartDate] = useState(null)
  useEffect(() => {
    console.log('startDate', startDate)
  })

  return (
    <>
      <h1>coucou</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        required
        form="external-form"
      />
      <form id="external-form">
        <input type="submit" />
      </form>
    </>
  )
}
