// @ts-nocheck

import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from 'fv_vite-react-ts-prop-button'
import Form from './components/Form'
import SelectRequired from './components/SelectRequired'

function App() {
  return (
    <div className="App">
      {/* <Button
        text={'Essai props'}
        btnColor={'white'}
        btnBgColor={'midnightblue'}
        fontSize={'1.2rem'}
      /> */}
      <Form />
      {/* <SelectRequired /> */}
    </div>
  )
}

export default App
