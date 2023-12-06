import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

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
        to_sta,
        user_id
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

    const handleBookTicket = async() => {
        // Log the array of passengers
        // const pnr = generatePNR();

        const isValidMobile = /^\d{10}$/g.test(mobileNumber) && !mobileNumber.startsWith('0');

        if (!isValidMobile) {
            alert('Invalid mobile number.');
            // You may also want to display an error message to the user
            return;
        }

        const bookingData = {
            train_name: train_name,
            train_number: train_number,
            train_date: train_date,
            from_station: from_station_name,
            from_station_code: from,
            dept_time: from_std,
            distance: distance,
            time: duration,
            class_booked:selectedClass,
            // date: date,
            to_station: to_station_name,
            to_station_code: to,
            arr_time: to_sta,
            passengers: passengerInfo,
            mobile:mobileNumber,
            user_id: user_id
        };

        // console.log(passengerInfo);
        console.log(bookingData);

        try{
            const response = await axios.post('http://127.0.0.1:5000/book',bookingData);
            console.log(response);
            navigate(`/user/${user_id}/history`);

        }
        catch (error){
            console.error('Booking error', error);
        }
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
                <button className='book-train-button book-train-submit' onClick={handleBookTicket}>Book Ticket</button>

                <Link to='/user/book'><button className='book-train-button book-train-cancel'>Cancel</button></Link>
            </div>
        </div>
    );
}

