import React from 'react'
import "./UserList.css"
import UserCard from '../../Components/UserCard/UserCard'

export default function UserList() {
  return (
    <div className='user-list'>
        <div className='user-list-top'>
            <div className='user-list-entry user-list-id'>User ID</div>
            <div className='user-list-entry user-list-name'>Username</div>
            <div className='user-list-entry user-list-phone'>Phone Number</div>
            <div className='user-list-entry user-list-mail'>E-mail</div>
            <div className='user-list-view-ticket'>View Tickets</div>
            {/* <button>View Tickets</button> */}
        </div>
        <UserCard/>
        <UserCard/>
        <UserCard/>
    </div>
  )
}
