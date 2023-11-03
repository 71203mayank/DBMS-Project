import React from 'react'
import "./TrainCard.css"

export default function TrainCard(props) {
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
                    Deptaure: {props.from_std} 
                </div>
            </div>
            <div className='train-card-dist'>
                <div>{props.distance} KM</div>
                <div> double-arrow-img</div>
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
                <button className='book-this-train'>Book</button>
            </div>
        </div>
    </div>
  )
}
