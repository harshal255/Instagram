import './App.css'
import Loginpage from './pages/Loginpage';
import Home from './pages/Home';
import Signuppage from './pages/Signuppage';
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Loginpage></Loginpage>}> </Route>
        <Route path='/signup' element={<Signuppage></Signuppage>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default App
