import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'fv_vite-react-ts-prop-button'

function App() {
  // const [count, setCount] = useState(0)
  // {
  //   function addition(x:number, y:number) {
  //     return x + y;
  // }
  // const result = addition(12, 14);
  // console.log(result);  
  // }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React + TS + Styled Components</h1>     
      <Button text={'Essai props'} btnColor={'yellow'} btnBgColor={'midnightblue'} fontSize={'1.2rem'} />  
    </div>
  )
}

export default App
