// import React from 'react'
// import "./PassengerCard.css"
// export default function PassengerCard(props) {
//   return (
//     <div className='passenger-card' key={props.index}>
//         <div>
//             <label className='passenger-label' for = 'passenger-name'>Passenger Name :</label>
//             <input className='passenger-name passenger-input' type='text' name='passenger-name'></input>
//         </div>
        
//         <div>
//             <label className='passenger-label'  for='passenger-sex'>
//                 Sex:
//             </label>
//             <select className='passenger-input passenger-sex'>
//                 <option>Select</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Others</option>
//             </select>
//         </div>
//         <div>
//             <label className='passenger-label'  for='passenger-age'>Age:</label>
//             <input className='passenger-age passenger-input' type='text' name='passenger-age'></input>
//         </div>

//     </div>
//   )
// }

// import React, { useState } from 'react';

// const PassengerCard = ({ index, passengerInfo, updatePassengerInfo }) => {
//     const [name, setName] = useState('');
//     const [sex, setSex] = useState('');
//     const [age, setAge] = useState('');

//     const handleNameChange = (event) => {
//         const newName = event.target.value;
//         setName(newName);
//         updatePassengerInfo(index, { name: newName, sex, age });
//     };

//     const handleSexChange = (event) => {
//         const newSex = event.target.value;
//         setSex(newSex);
//         updatePassengerInfo(index, { name, sex: newSex, age });
//     };

//     const handleAgeChange = (event) => {
//         const newAge = event.target.value;
//         setAge(newAge);
//         updatePassengerInfo(index, { name, sex, age: newAge });
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={handleNameChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Sex"
//                 value={sex}
//                 onChange={handleSexChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Age"
//                 value={age}
//                 onChange={handleAgeChange}
//             />
//         </div>
//     );
// };

// export default PassengerCard;

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

