import React,{useState} from 'react'
import "./BookTrain.css"
import BookTrainCard from '../../Components/BookTrainCard/BookTrainCard'
import PassengerCard from '../../Components/PassengerCard/PassengerCard'


export default function BookTrain() {

    const [passengerCount, setPassengerCount] = useState(1);
    
    const handlePassengerCountChange = (e) =>{
        setPassengerCount(Number(e.target.value));
    }

    const generatePassengerCards = () =>{
        const passengerCards = [];
        for(let i = 0;i<passengerCount;i++){
            passengerCards.push(
                <PassengerCard index={i}/>
            );
        }

        console.log(passengerCards)

        return passengerCards;
    }

    return (
        <div className='book-train'>
            <div className='book-train-header'>
                <BookTrainCard/>
                <div className='book-train-metadata'>
                    <div>
                        <label className='metadata-label'>Mobile :</label>
                        <input className='metadata-default'value='91' disabled></input>
                        <input className='metadata-mobile-number metadata-input' type='text' required ></input>
                    </div>
                    <div>
                        <lable className='metadata-label'>Class :</lable>
                        <select className='metadata-input metadata-class'>
                            <option>SL</option>
                            <option>1A</option>
                            <option>2A</option>
                            <option>3A</option>
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
                    {/* <button onclick={generatePassengerCards}>Create Ticket</button> */}
                </div>
            </div>
            <div>
                {/* <PassengerCard/> */}
                {generatePassengerCards()}
            </div>
            <div className='book-train-confirm'>
                <button>Book Ticket</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}
