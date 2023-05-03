// @ts-nocheck

// import { useState } from 'react'
// import './App.css'
// import Form from './components/Form_OLD'

// function App() {
//   // const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeForm from './pages/HomeForm'
import EmployeesList from './pages/EmployeeList'

function App() {
  // const bidule = JSON.parse(localStorage.getItem('employees'))
  // console.log('bidule', bidule)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeForm />} />
        <Route path="/employee-list" element={<EmployeesList />} />
      </Routes>
    </Router>
  )
}

export default App
