import React from 'react'
import ReactDOM from 'react-dom/client'

import { EmployeeProvider } from './utilsContextProvider/EmployeeContextProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <EmployeeProvider> */}
    <App />
    {/* </EmployeeProvider> */}
  </React.StrictMode>
)
