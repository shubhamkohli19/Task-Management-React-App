import React from 'react'
import './onlineUsers.css'
import { useCollection } from '../../hooks/useCollection'
import Avatar from '../avatar/Avatar'

const OnlineUsers = () => {
    const {documents, error} = useCollection('users')
  return (
    <div className='user-list'>
        <h2>All Users</h2>
        {error && <div className='error'>{error}</div>}
        {documents && documents.map(user => (
            <div key={user.id} className='user-list-item'>
                <Avatar src={user.photoURL}/>
                <span className='user-display'>{user.displayName}</span>
                {user.online && <span className='online-user'></span>}
                
            </div>

        ))}
    </div>
  )
}

export default OnlineUsers