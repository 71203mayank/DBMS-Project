import React, { useState } from 'react';

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
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            <select
                value={sex}
                onChange={handleSexChange}
            >
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Others</option>
            </select>
            <input
                type="text"
                placeholder="Age"
                value={age}
                onChange={handleAgeChange}
            />
        </div>
    );
};

export default PassengerCard;

