import React, { useState } from 'react';
import "./PassengerCard.css"
const PassengerCard = ({ index, passengerInfo, updatePassengerInfo }) => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        updatePassengerInfo(index, { name: newName, sex, age });
    };

    const handleSexChange = (event) => {
        const newSex = event.target.value;
        setSex(newSex);
        updatePassengerInfo(index, { name, sex: newSex, age });
    };

    const handleAgeChange = (event) => {
        const newAge = event.target.value;
        setAge(newAge);
        updatePassengerInfo(index, { name, sex, age: newAge });
    };

    return (
        <div className='passenger-card'>
            <div className=' passenger-field'>
                <div className='passenger-label'>
                    Name :
                </div>
                <input
                    type="text"
                    // placeholder="Name"
                    value={name}
                    className='passenger-input passenger-name'
                    onChange={handleNameChange}
                />
            </div>
            <div className=' passenger-field'>
                <div className='passenger-label'>
                    Sex :
                </div>
                <select
                    value={sex}
                    onChange={handleSexChange}
                    className='passenger-input passenger-sex'
                >
                    <option value="">Select</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Others</option>
                </select>
            </div>
            <div className='passenger-field'>
                <div className='passenger-label'>
                    Age :   
                </div>
                <input
                    type="text"
                    // placeholder="Age"
                    value={age}
                    onChange={handleAgeChange}
                    className='passenger-input passenger-age'
                />
            </div>
        </div>
    );
};

export default PassengerCard;

