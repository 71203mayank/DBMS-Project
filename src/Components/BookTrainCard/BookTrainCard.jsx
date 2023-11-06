import React from 'react'
import "./BookTrainCard.css"


export default function BookTrainCard(props) {
  return (
    <div className='book-train-card'>
        <div className='booked-train-detail'>
            <div className='booked-train-name'>{props.train_name}</div>
            <div className='booked-train-number'>{props.train_number}</div>
        </div>
        <div className='booked-journey-detail'>
            <div className='booked-from'>
                <div className='booked-from-station'>
                    {props.from_station_name}, {props.from}
                </div>
                <div className='booked-std'>
                    Dept: {props.from_std}
                </div>
            </div>
            <div className='travel-detail'>
                <div className='booked-date'>
                    {props.date}
                </div>
                <div className='booked-distance'>
                    {props.distance} KM
                </div>
                <div className='booked-hrs'>
                    {props.duration} HRS
                </div>
            </div>
            <div className='booked-to'>
                <div className='booked-to-station'>
                    {props.to_station_name}, {props.to}
                </div>
                <div className='booked-sta'>
                    Arr: {props.to_sta}
                </div>   
            </div>
        </div>
    </div>
  )
}
