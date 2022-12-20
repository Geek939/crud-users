import axios from 'axios'
import './App.css'



const BASE_URL = "https://users-crud.academlo.tech/swagger/?format=openapi"

function App() {
  
  const getAllUsers = () =>{
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then (res => console.log (res.data))
      .catch (err => console.log (err))
  }

  getAllUsers ()

  return (
    <div className="App">
     <h1>Hola mundo</h1>
    </div>
  )
}

export default App
