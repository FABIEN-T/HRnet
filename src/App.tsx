// @ts-nocheck

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EmployeeProvider } from './state/EmployeeContext'
import HomeForm from './pages/HomeForm'
import EmployeesList from './pages/EmployeeList'

function App() {
  // const bidule = JSON.parse(localStorage.getItem('employees'))
  // console.log('bidule', bidule)
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeForm />} />
          <Route path="/employee-list" element={<EmployeesList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  )
}

export default App
