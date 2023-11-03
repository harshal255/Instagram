import './App.css'
import Home from './pages/Home';
import Signuppage from './pages/Signuppage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/signup' element={<Signuppage></Signuppage>}></Route>
      </Routes>
    </>
  )
}

export default App
