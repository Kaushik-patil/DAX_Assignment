import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
         <Route path='/signup' element={<SignupPage/>}/>
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
    
  )
}

export default App
