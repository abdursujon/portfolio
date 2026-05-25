import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './common-components/Header'
import Home from './pages/home/Home'
import Projects from './pages/projects/Project'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<Projects/>}></Route>
    </Routes>
  )
}

export default App
