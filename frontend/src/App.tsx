import { useEffect, useState } from 'react'
import {  Route, Routes } from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {

  const [name, setName] = useState('')

  useEffect(() => {
      (
          async () => {
              const res = await fetch('http://localhost:8000/api/user', {
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  credentials: 'include',
              })
              const data = await res.json()
              setName(data.name)
          }
      )()
  }, [])

  return (
    <div className="App">
        <Nav name={name}/>
      <div className='flex justify-center'>
          <Routes>
            <Route path='/'  element={<Home name={name} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </div>
    </div>
  ) 
}

export default App

