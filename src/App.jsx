import './App.css'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import NavBar from './NavBar'
import Order from './Order'

function App() {
 
  return (
    <>

      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Order" element={<Order/>}/>
      </Routes>
      
      
      </>
  )
}

export default App;
