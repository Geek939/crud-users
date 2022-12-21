import React from 'react'

const UserCard = ({user}) => {
  
  console.log(user)

return (
    
    <article>
        
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email</span>{user.email}</li>
            <li><span>Birthday</span>{user.birthday}</li>
            <li><span></span></li>
        </ul>
        <i className='bx bx-trash'></i>
        <i className='bx bxs-edit-alt'></i>
        
    </article>
  )
}

export default UserCard