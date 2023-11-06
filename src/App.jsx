
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/signup'
import Property from './pages/Property'
import Contact from './pages/Contact'
import PropertyDetails from './pages/PropertyDetails'

function App() {
  
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Property' element={<Property/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/property/:id' element={<PropertyDetails/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>  
        <Footer/>
    </div>
  )
}

export default App
