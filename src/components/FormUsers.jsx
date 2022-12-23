import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'


const defaultValues = {

  email:"",
  password:"",
  first_name:"",
  last_name:"",
  birthday:""
}


const FormUsers = ({createUser , userUpdate, updateUser}) => {
  
  const {handleSubmit,register, reset} = useForm()
  
  const submitForm = (data) => {

    if(userUpdate){
      updateUser (userUpdate.id, data)
    }else{
    createUser(data)
    }

    reset(defaultValues)
   }
  
   useEffect(()=> {
   if (userUpdate){
    reset(userUpdate)
   }
   }, [userUpdate])

  
    return (
    <form onSubmit={handleSubmit (submitForm)}>
      <h2>{userUpdate? "Edite User" : "New user"}</h2>
        <div>
        <label htmlFor="">Email</label>
        <input type="email" {...register ("email")} />
        </div>

        <div>
        <label htmlFor="">Password</label>
        <input type="password" {...register ("password")}/>
        </div>

        <div>
        <label htmlFor="">First Name</label>
        <input type="text" {...register ("first_name")}/>
        </div>

        <div>
        <label htmlFor="">Last Name</label>
        <input type="text" {...register ("last_name")} />
        </div>

        <div>
        <label htmlFor="">Birthday</label>
        <input type="date" {...register ("birthday")} />
        </div>

        <button>{userUpdate?  "Edit User" : "Add new user"}</button>
    </form>
  )
}

export default FormUsers