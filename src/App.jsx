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
  const [userUpdate, setUserUpdate] = useState()


console.log(userUpdate)

  // funcion que obtine todos los usuarios
  const getAllUsers = () =>{
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      
      .then (res => setUsers (res.data))
      .catch (err => console.log (err))
  }


  //funcion para crear un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post (URL, data)
    .then (res=> {
    console.log (res.data)
    getAllUsers()
  })
    .catch(err=> console.log (err) )

  }

  //funcion para elimiinar un usuario

  const deleteUser = (id) => {
    const URL =`${BASE_URL}users/${id}/`
    axios.delete(URL)
    .then(res=> {
      console.log(res.data)
      getAllUsers()} )
    .catch(err=> console.log(err))
  }

  const updateUser = (id, data) => {
    const URL =`${BASE_URL}users/${id}/`
    
    axios.patch (URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
      setUserUpdate()
  })
    .catch(err=>console.log(err))
  }


  //se obtienen todos los usuarios al cargar la aplicacion 
  useEffect(() => {
    getAllUsers ()

  }, [])



  return (
    <div className="App pt-10">
     
     <section className='text-lg  font-medium flex justify-center items-center flex-col gap-5'>
     <h1 className='text-3xl'>Crud Users</h1>
     
      <FormUsers createUser={createUser} userUpdate={userUpdate} updateUser={updateUser}/>
    {
      users?.map(user => (
       < UserCard  
        key={user.id}
        user={user}
        deleteUser={deleteUser}
        setUserUpdate={setUserUpdate}
        updateUser={updateUser}
        />
       ))

    }
    </section>  
    </div>
  )
}

export default App
