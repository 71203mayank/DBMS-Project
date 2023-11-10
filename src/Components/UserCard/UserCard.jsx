import React from 'react'
import "./UserCard.css"
import { Link } from 'react-router-dom'
export default function UserCard() {
  return (
    <div className='user-card'>
        <div className='user-card-entry user-card-id'>123</div>
        <div className='user-card-entry user-card-name'>Mayank Gupta</div>
        <div className='user-card-entry user-card-phone'>8921969412</div>
        <div className='user-card-entry user-card-mail'>mayank71203@gmail.com</div>
        <Link to='/admin/history'>  <button>View Tickets</button> </Link>
       
    </div>
  )
}
