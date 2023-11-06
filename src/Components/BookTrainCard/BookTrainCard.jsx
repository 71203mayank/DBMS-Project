import React from 'react'
import "./BookTrainCard.css"


export default function BookTrainCard() {
  return (
    <div className='book-train-card'>
        <div className='booked-train-detail'>
            <div className='booked-train-name'>Mangla Lakshadweep SF Express</div>
            <div className='booked-train-number'>12345</div>
        </div>
        <div className='booked-journey-detail'>
            <div className='booked-from'>
                <div className='booked-from-station'>
                    From: Ernakulam Jn, ERS
                </div>
                <div className='booked-std'>
                    Dept: 15:00
                </div>
            </div>
            <div className='travel-detail'>
                <div className='booked-date'>
                    12-12-2023
                </div>
                <div className='booked-distance'>
                    2345 KM
                </div>
                <div className='booked-hrs'>
                    44 HRS
                </div>
            </div>
            <div className='booked-to'>
                <div className='booked-to-station'>
                    To: Hazarat Nizamuddin, NZM
                </div>
                <div className='booked-sta'>
                    Arr: 10:00
                </div>   
            </div>
        </div>
    </div>
  )
}
