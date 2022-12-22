import React from 'react'

const UserCard = ({user, deleteUser, setUserUpdate}) => {
  
  console.log(user)

return (
    
    <article>
        
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email</span>{user.email}</li>
            <li><span>Birthday</span>{user.birthday}</li>
        </ul>
        <i onClick={()=>deleteUser(user.id)} className='bx bx-trash'></i>
        <i onClick={()=>setUserUpdate (user)} className='bx bxs-edit-alt'></i>
        
    </article>
  )
}

export default UserCard