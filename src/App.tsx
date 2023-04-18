import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from 'fv_vite-react-ts-prop-button'
import Form from './components/Form'
import Account from './components/Account'

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
      {/* <Account /> */}
    </div>
  )
}

export default App
