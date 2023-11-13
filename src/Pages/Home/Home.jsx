import React from 'react'
import "./Home.css";
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const {id} = useParams();
    return (
        <div className='home-page'>
            <div className='home'>
                {/* Background image by: Freepik */}
                <div className='home-title'>
                    <div className='home-title-big'>
                            All Aboard for<br></br>
                            Seamless Rail Travel!!
                    </div>
                    <div className='home-title-small'>
                            Book Your Journey <br></br>
                            with Ease.
                    </div>
                    
                </div>
                <Link to={`/user/${id}/search`} className='search-train'>
                        <button className='search-train-button hover:text-teal-500 hover:bg-white' >
                            Search Trains
                        </button>
                </Link>
            </div>
            <div className='home-extra-one'>
                <div className='other-features'>
                    <div className="feature">
                        <div className='new-offer'>COMING <br></br>SOON</div>
                        <img className='offer-img' src='./Assets/hotel.png' alt='hotel'></img>
                        <div className='offer'> Hotels</div>
                    </div>
                    <div className="feature">
                        <div className='new-offer'>COMING <br></br>SOON</div>
                        <img className='offer-img' src='./Assets/world.png' alt='hotel'></img>
                        <div className='offer'>Travel Anywhere</div>
                    </div>
                    <div className="feature">
                        <div className='new-offer'>COMING <br></br>SOON</div>
                        <img className='offer-img' src='./Assets/suitcase.png' alt='hotel'></img>
                        <div className='offer'>Holidays Package</div>                        
                    </div>
                    <div className="feature ">
                        <div className='new-offer train-offer'>COMING <br></br>SOON</div>
                        <img className='offer-img' src='./Assets/train.png' alt='hotel'></img>
                        <div className='offer'> Trains</div>
                    </div>
                    <div className="feature">
                        <div className='new-offer'>COMING <br></br>SOON</div>
                        <img className='offer-img' src='./Assets/aeroplane.png' alt='hotel'></img>
                        <div className='offer'>Flights</div>
                    </div>
                </div>
            </div>
            <div className='home-extra-two'>
                 
            </div>
        </div>
    )
}
