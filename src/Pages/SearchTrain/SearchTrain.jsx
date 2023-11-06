import React, { useState } from 'react';
import "./SearchTrain.css"
import axios from 'axios';
import TrainCard from '../../Components/TrainCard/TrainCard';

function SearchTrain() {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [trainDetails, setTrainDetails] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
    params: {
      fromStationCode: inputText1,
      toStationCode: inputText2,
      dateOfJourney: '2023-12-07'
    },
    headers: {
      'X-RapidAPI-Key': 'c39fbf7a14msh8700b8453c1138fp15a705jsna84911a7263f',
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
      return response.data.data;
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  })
  .then((data) => {
    setTrainDetails(data);
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  };

  return (
    <div className='search-trains' >
      <div className='search-form-container'>
        <div>
          <lable for='from-station'>From *</lable>
          <div className='search-train-input-contaner' >
            <input
              className='search-train-input'
              name = 'from-station'
              type="text"
              placeholder="Input 1"
              value={inputText1}
              onChange={(e) => setInputText1(e.target.value)}
            />
          </div>
          <label for='to-station'>To *</label>
          <div className='search-train-input-contaner'>
            <input
              name='to-station'
              className='search-train-input'
              type="text"
              placeholder="Input 2"
              value={inputText2}
              onChange={(e) => setInputText2(e.target.value)}
            />
          </div>
          <label for='journey-date'>Date of Journery * </label>
          <div>
            <input
              name='journey-date'
              className='search-train-date'
              type="date"
              min="yyyy-mm-dd"
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      <div className='searched-train-container'>
        {trainDetails.map((train, index)=>(
          <TrainCard
            index = {index} 
            train_number = {train.train_number}
            train_name = {train.train_name}
            train_date = {train.train_date}

            from_station_name = {train.from_station_name}
            from = {train.from}
            from_sta = {train.from_sta}
            from_std = {train.from_std}

            distance = {train.distance}
            duration = {train.duration}

            to_station_name = {train.to_station_name}
            to = {train.to}
            to_sta = {train.to_sta}
            to_std = {train.to_std}

            class_type = {train.class_type}
          />
        )
        )
        }
      </div>
    </div>
  );
}

export default SearchTrain;