import React from 'react'
import "./TrainCard.css"

import { useNavigate} from 'react-router-dom';

export default function TrainCard(props) {

    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate(`/user/${props.user_id}/book`, {
        state: {
                    train_name: props.train_name,
                    train_number: props.train_number,
                    train_date: props.train_date,
                    from_station_name : props.from_station_name,
                    from : props.from,
                    from_std : props.from_std,
                    distance: props.distance,
                    duration: props.duration,
                    date: props.train_date,
                    class_type: props.class_type,
                    to_station_name: props.to_station_name,
                    to : props.to,
                    to_sta: props.to_sta,
                    user_id: props.user_id

        } // Pass your props as state
        });
    };
  return (
    <div className='train-card' key={props.index}>
        <div className='train-card-header'>
            <div className='train-name'>
                {props.train_name}
            </div>
            <div className='trian-card-number'>
                {props.train_number}
            </div>
        </div>
        <div className='train-card-body' key={props.index}>
            <div className='train-card-from train-card-station'>
                <div className='station'>
                    {props.from_station_name}, {props.from}
                </div>
                <div className='time'>
                    Departure: {props.from_std} 
                </div>
            </div>
            <div className='train-card-dist'>
                <div>{props.distance} KM</div>
                {/* <div> double-arrow-img</div> */}
                <div>{props.duration} Hrs</div>
            </div>
            <div className='train-card-to train-card-station'>
                <div className='station'>
                        {props.to_station_name}, {props.to}
                </div>
                <div className='time'>
                    Arrival: {props.to_sta} 
                </div>    
            </div>
        </div>
        <div className='train-card-classes'>
            <div className='available-class'>
                {
                    props.class_type.map((cls,index)=>(
                        <div className='train-card-class' key={index}>{cls}</div>
                    ))
                }
            </div>
            
            <div className='book-ticket-now'>
                <button className='book-this-train' onClick={handleBookClick}>Book</button>
            </div>
        </div>
    </div>
  )
}

