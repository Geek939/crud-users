import React from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({createUser , userUpdate}) => {
  
  const {handleSubmit,register, reset} = useForm()
  
  const submitForm = (data) => {

    createUser (data)
   }
  
   useEffect(()=>{
   if (userUpdate){
    reset(userUpdate)
   }
   },[userUpdate])

  
    return (
    <form onSubmit={handleSubmit (submitForm)}>
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

        <button>Add user</button>
    </form>
  )
}

export default FormUsers