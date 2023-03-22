import React from 'react'

const UserCard = ({user, deleteUser, setUserUpdate}) => {
  
  console.log(user)

return (
    
    <article className='mb-10'>
        
        <h2 className='text-center'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='flex flex-col gap-2 border border-black'>
            <li className='flex gap-3'><span>Email:</span>{user.email}</li>
            <li className='flex gap-3'><span>Birthday</span>{user.birthday}</li>
        </ul>
       <div className='flex gap-5 justify-center items-center pt-5 cursor-pointer hover:transform hover:scale-125 transition duration-500'>
        <i  onClick={()=>deleteUser(user.id)} className='bx bx-trash bg-red-500'></i>
        <i onClick={()=>setUserUpdate (user)} className='bx bxs-edit-alt bg-green-700'></i>
        </div>
    </article>
  )
}

export default UserCard