// import React,{useState} from 'react'
// import "./BookTrain.css"
// import BookTrainCard from '../../Components/BookTrainCard/BookTrainCard'
// import PassengerCard from '../../Components/PassengerCard/PassengerCard'


// export default function BookTrain() {

//     const [passengerCount, setPassengerCount] = useState(1);
    
//     const handlePassengerCountChange = (e) =>{
//         setPassengerCount(Number(e.target.value));
//     }

//     const generatePassengerCards = () =>{
//         const passengerCards = [];
//         for(let i = 0;i<passengerCount;i++){
//             passengerCards.push(
//                 <PassengerCard index={i}/>
//             );
//         }

//         console.log(passengerCards)

//         return passengerCards;
//     }

//     return (
//         <div className='book-train'>
//             <div className='book-train-header'>
//                 <BookTrainCard/>
//                 <div className='book-train-metadata'>
//                     <div>
//                         <label className='metadata-label'>Mobile :</label>
//                         <input className='metadata-default'value='91' disabled></input>
//                         <input className='metadata-mobile-number metadata-input' type='text' required ></input>
//                     </div>
//                     <div>
//                         <lable className='metadata-label'>Class :</lable>
//                         <select className='metadata-input metadata-class'>
//                             <option>SL</option>
//                             <option>1A</option>
//                             <option>2A</option>
//                             <option>3A</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className='metadata-label'>No. of Passengers :</label>
//                         <select className='metadata-input metadata-passenger-count' value={passengerCount} onChange={handlePassengerCountChange}>
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                         </select>
//                     </div>
//                     {/* <button onclick={generatePassengerCards}>Create Ticket</button> */}
//                 </div>
//             </div>
//             <div>
//                 {/* <PassengerCard/> */}
//                 {generatePassengerCards()}
//             </div>
//             <div className='book-train-confirm'>
//                 <button>Book Ticket</button>
//                 <button>Cancel</button>
//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import { Link,useNavigate} from 'react-router-dom';

import "./BookTrain.css";
import BookTrainCard from '../../Components/BookTrainCard/BookTrainCard';
import PassengerCard from '../../Components/PassengerCard/PassengerCard';

export default function BookTrain() {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        train_name,
        train_number,
        train_date,
        from_station_name,
        from,
        from_std,
        distance,
        duration,
        date,
        class_type,
        to_station_name,
        to,
        to_sta
    } = location.state;

    const [passengerCount, setPassengerCount] = useState(1);
    const [passengerInfo, setPassengerInfo] = useState([]);
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    const handlePassengerCountChange = (e) => {
        const count = Number(e.target.value);
        setPassengerCount(count);

        // Reset passengerInfo when passengerCount changes
        setPassengerInfo([]);
    }

    const handlePassengerInfoChange = (index, updatedInfo) => {
        const updatedPassengerInfo = [...passengerInfo];
        updatedPassengerInfo[index] = updatedInfo;
        setPassengerInfo(updatedPassengerInfo);
    }

    const handleBookTicket = () => {
        // Log the array of passengers
        const bookingData = {
            train_name: train_name,
            train_number: train_number,
            train_date: train_date,
            from_station_name: from_station_name,
            from: from,
            from_std: from_std,
            distance: distance,
            duration: duration,
            date: date,
            to_station_name: to_station_name,
            to: to,
            to_sta: to_sta,
            passengers: passengerInfo,
            mobile:mobileNumber,
            class:selectedClass
        };

        // console.log(passengerInfo);
        console.log(bookingData);
        navigate('/user/history');
        // <navigate to='/user/history'/>
    }

    const generatePassengerCards = () => {
        const passengerCards = [];
        for (let i = 0; i < passengerCount; i++) {
            passengerCards.push(
                <PassengerCard
                    key={i}
                    index={i}
                    passengerInfo={passengerInfo[i] || {}}
                    updatePassengerInfo={handlePassengerInfoChange}
                />
            );
        }

        return passengerCards;
    }

    return (
        <div className='book-train'>
            <div className='book-train-header'>
                <BookTrainCard 
                    train_name = {train_name}
                    train_number = {train_number}
                    train_date = {train_date}
                    from_station_name = {from_station_name}
                    from = {from}
                    from_std = {from_std}
                    distance = {distance}
                    duration = {duration}
                    date = {date}
                    to_station_name = {to_station_name}
                    to = {to}
                    to_sta = {to_sta}
                />
                <div className='book-train-metadata'>
                    <div>
                        <label className='metadata-label'>Mobile :</label>
                        <input className='metadata-default' value='91' disabled></input>
                        <input className='metadata-mobile-number metadata-input' type='text' required onChange={(e) => setMobileNumber(e.target.value)}></input>
                    </div>
                    <div>
                        <label className='metadata-label'>Class :</label>
                        <select className='metadata-input metadata-class' onChange={(e) => setSelectedClass(e.target.value)}>
                            {class_type.map((cls,index)=>(
                                <option key={index}>{cls}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='metadata-label'>No. of Passengers :</label>
                        <select className='metadata-input metadata-passenger-count' value={passengerCount} onChange={handlePassengerCountChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                {generatePassengerCards()}
            </div>
            <div className='book-train-confirm'>
                <button onClick={handleBookTicket}>Book Ticket</button>

                <Link to='/user/book'><button>Cancel</button></Link>
            </div>
        </div>
    );
}

