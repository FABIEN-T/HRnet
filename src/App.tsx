import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from 'fv_vite-react-ts-prop-button'
import Form from './components/Form'
import Example from './components/InputText'

function App() {
  return (
    <div className="App">
      {/* <Button
        text={'Essai props'}
        btnColor={'white'}
        btnBgColor={'midnightblue'}
        fontSize={'1.2rem'}
      /> */}
      {/* <Form /> */}
      <Example />
    </div>
  )
}

export default App
