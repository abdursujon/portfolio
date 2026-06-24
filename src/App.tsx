import { Routes, Route } from 'react-router-dom'
import Header from './common-components/Header'
import Home from './pages/home/Home'
import Projects from './pages/projects/Project'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App