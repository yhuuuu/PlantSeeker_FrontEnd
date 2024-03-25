import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import IdentifyPage from './pages/IdentifyPage';
import PlantDetailPage from './pages/PlantDetailPage';
import FavListPage from './pages/FavListPage';
import PlantDiseasePage from './pages/PlantDiseasePage';
import Footer from './components/footer/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>  
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/identify' element={<IdentifyPage />} />
        <Route path='/identify/plants/:id' element={<PlantDetailPage />} />
        <Route path='/favoriteList' element={<FavListPage />} />
        <Route path='/plantDisease' element={<PlantDiseasePage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
