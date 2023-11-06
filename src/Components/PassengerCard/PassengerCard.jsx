import React from 'react'
import "./PassengerCard.css"
export default function PassengerCard(props) {
  return (
    <div className='passenger-card' key={props.index}>
        <div>
            <label className='passenger-label' for = 'passenger-name'>Passenger Name :</label>
            <input className='passenger-name passenger-input' type='text' name='passenger-name'></input>
        </div>
        
        <div>
            <label className='passenger-label'  for='passenger-sex'>
                Sex:
            </label>
            <select className='passenger-input passenger-sex'>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
        </div>
        <div>
            <label className='passenger-label'  for='passenger-age'>Age:</label>
            <input className='passenger-age passenger-input' type='text' name='passenger-age'></input>
        </div>

    </div>
  )
}
