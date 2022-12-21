import React from 'react'

const UserCard = ({user}) => {
  
  console.log(user);

return (
    
    <article>
        
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Correo</span></li>

        </ul>
        
    </article>
  )
}

export default UserCard