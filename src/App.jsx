
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'

import History from './pages/History'
import Home from './pages/Home '
import Footer from './components/Footer'
import Header from './components/Header'




function App() {

  return (
    <>
    <Header/>

    {/* path */}
    <Routes>

      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/history' element={<History />} />

    </Routes>

    <Footer/>
    </>
  )
}

export default App
