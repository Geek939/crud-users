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

    if(userUpdate) {
      updateUser(userUpdate.id, data)
    }
    else{
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
    <form className='flex flex-col gap-3 items-center' onSubmit={handleSubmit (submitForm)}>
      <h2 className='text-center font-normal'>{userUpdate? "Edite User" : "New user"}</h2>
        <div className='bg mt-5 flex flex-col'>
        <label className='pr-3' htmlFor="">Email</label>
        <input className='border border-black' type="email" {...register ("email")} />
        </div>

        <div className='flex flex-col'>
        <label className='pr-3'  htmlFor="">Password</label>
        <input className='border border-black' type="password" {...register ("password")}/>
        </div>

        <div className='flex flex-col'>
        <label className='pr-3'  htmlFor="">First Name</label>
        <input className='border border-black' type="text" {...register ("first_name")}/>
        </div>

        <div className='flex flex-col'>
        <label className='pr-3'  htmlFor="">Last Name</label>
        <input className='border border-black' type="text" {...register ("last_name")} />
        </div>

        <div className='flex flex-col'>
        <label className='pr-3'  htmlFor="">Birthday</label>
        <input className='border border-black' type="date" {...register ("birthday")} />
        </div>
         <div className=' h-9 w-36 bg-black text-center pt-1 text-white text-base rounded-lg transform hover:scale-110 duration-500'>
        <button className=''>{userUpdate?  "Edit User" : "Add new user"}</button>
        </div>
    </form>
  )
}

export default FormUsers