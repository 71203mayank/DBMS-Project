import React, { useState } from 'react';
import "./SearchTrain.css"
import axios from 'axios';
import TrainList from '../TrainList/TrainList';

function SearchTrain() {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
    params: {
      fromStationCode: inputText1,
      toStationCode: inputText2,
      dateOfJourney: '2023-12-07'
    },
    headers: {
      'X-RapidAPI-Key': 'b78b1f67eemsh996db79a29fce7dp140495jsneda18539b372',
      'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
  };

  const handleSubmit = () => {
    console.log('Input 1:', inputText1);
    console.log('Input 2:', inputText2);

    axios
  .request(options)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

  };

  return (
    <div className='search-trains' >
      <div className='search-form-container'>
            <input
              type="text"
              placeholder="Input 1"
              value={inputText1}
              onChange={(e) => setInputText1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Input 2"
              value={inputText2}
              onChange={(e) => setInputText2(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <TrainList/>
      </div>
    </div>
  );
}

export default SearchTrain;
