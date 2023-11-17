import React,{useState, useEffect} from 'react'
import axios from 'axios'
import "./UserList.css"
import UserCard from '../../Components/UserCard/UserCard'

export default function UserList() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.49:5000/show')
      .then(response => {
        setUser(response.data.users);
        console.log(response.data.users);
      })
      .catch(err => {
        console.error("Fetching User Error", err);
      });
  }, []); // Empty dependency array

  const onDeleteHandle = async (userid) =>{
    console.log('clicked')
    console.log(userid)

    try{
        const response = await axios.delete(`http://192.168.1.49:5000/delete?user_id=${userid}`);
        console.log(response);
        window.location.reload();
    }
    catch(err){
      console.err("User Delete Error")
    }
  }


  return (
    <div className='user-list'>
        <div className='user-list-top'>
            <div className='user-list-entry user-list-id'>User ID</div>
            <div className='user-list-entry user-list-name'>Username</div>
            <div className='user-list-entry user-list-mail'>E-mail</div>
            <div className='user-list-entry user-list-delete'>Delete User</div>
            <div className='user-list-view-ticket'>View Tickets</div>
            {/* <button>View Tickets</button> */}
        </div>
        <div className='user-list-passenger-list'>
          {user.map((user,index)=>( 
            <UserCard
              key = {index}
              userid = {user.id}
              username = {user.username}
              usermail = {user.email}
              onDelete = {onDeleteHandle}
            />
          ))}
        </div>
    </div>
  )
}
