import './App.css'
import {Routes,Route} from 'react-router-dom'
import Signup from './signup/Signup'
import Login from './login/Login'
import Homepage from './homepage/Homepage'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
     <div className="p-4 h-screen flex items-center justify-center">
 
     <Routes> 
      <Route path='/' element ={<Homepage />}/>
      <Route path='/login' element ={<Login />}/>
      <Route path='/signup' element ={<Signup />}/>
     </Routes>
     <Toaster />
     </div>
  )
}

export default App;
