import axios from 'axios'
import { useEffect } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import { useState } from 'react'
import UserCard from './components/UserCard'



const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  //estado para almacenar los usuarios y poder mostrarlos
  const [users, setUsers] = useState()



  // funcion que obtine todos los usuarios
  const getAllUsers = () =>{
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      
      .then (res => setUsers (res.data))
      .catch (err => console.log (err))
  }


  //funcion para crear un usuario
  const createUser = () => {
    const URL = `${BASE_URL}users/`
    axios.post (URL, data)
    .then (res=> {
    console.log (res.data)
    getAllUsers()
  })
    .catch(err=> console.log (err) )

  }



  //se obtienen todos los usuarios al cargar la aplicacion 
  useEffect(() => {
    getAllUsers ()

  }, [])



  return (
    <div className="App">
     
     <h1>Hola mundo</h1>
     
      <FormUsers createUser={createUser}/>
    {
      users?.map(user => (
       < UserCard  key={user.id} user={user}/>
       ))

    }

    </div>
  )
}

export default App
