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

import HomeForm from './components/HomeForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeForm />} />
      </Routes>
    </Router>
  )
}

export default App
