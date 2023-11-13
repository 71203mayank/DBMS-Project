import React from 'react'
import "./UserCard.css"
import { Link } from 'react-router-dom'
export default function UserCard(props) {
  const onDeleteHandle =()=>{
    props.onDelete(props.userid);
  }
  return (
    <div className='user-card' key={props.key}>
        <div className='user-card-entry user-card-id'>{props.userid}</div>
        <div className='user-card-entry user-card-name'>{props.username}</div>
        <div className='user-card-entry user-card-mail'>{props.usermail}</div>
        <div className='user-card-entry user-card-delete'><button onClick={onDeleteHandle}>Delete User</button></div>
        <Link className='user-card-history' to={`/admin/${props.userid}/history`}>  <button>View Tickets</button> </Link>
       
    </div>
  )
}
