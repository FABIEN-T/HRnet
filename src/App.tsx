// @ts-nocheck

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmployeeProvider } from './utilsContextProvider/EmployeeContextProvider'
import HomeForm from './pages/HomeForm'
import EmployeesList from './pages/EmployeeList'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <Routes>
          <Route path="/" element={<HomeForm />} />
          <Route path="/employee-list" element={<EmployeesList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </EmployeeProvider>
    </BrowserRouter>
  )
}

export default App
