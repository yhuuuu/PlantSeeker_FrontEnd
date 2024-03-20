import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/identify' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
