// @ts-nocheck

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EmployeeProvider } from './utils/EmployeeContextProvider'
import HomeForm from './pages/HomeForm'
import EmployeesList from './pages/EmployeeList'
import EssaiContext from './pages/EssaiContext'

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeForm />} />
          <Route path="/ess" element={<EssaiContext />} />
          <Route path="/employee-list" element={<EmployeesList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  )
}

export default App
