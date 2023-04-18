// @ts-nocheck

import React, { useState, useEffect } from 'react'
import Select from 'react-select'
// import { statesLabel } from '../datasSelect/selectLabel'

// for (let i = 0; i < states.length; i++) {
//   states[i].values = states[i].name
//   states[i].label = states[i].name
//   const statesLabel = [...states]
//   console.log(statesLabel)
// }
// const eff = [...statesLabel]
// Reflect.deleteProperty(eff, 'name')

// for (let i = 0; i < eff.length; i++) {
//   Reflect.deleteProperty(eff[i], 'name')
//   console.log(eff[i])
// }
// console.log('eff', eff)

export default function MySelect({ options }) {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  )
}
