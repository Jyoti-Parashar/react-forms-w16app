//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'

import  BasicForm  from "./components/users/BasicForm";
import AppNavBar from "./components/Navbar/AppNavBar";
import UsersApp from "./components/users/UserApp";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div >  
      <AppNavBar/>
      <BasicForm/>   
      <UsersApp></UsersApp>
       
      
    </div>
     
  )
}

export default App
