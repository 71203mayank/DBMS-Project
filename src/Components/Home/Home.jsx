import React, {useState} from 'react'
import "./Home.css";
import SearchTrain from '../SearchTrain/SearchTrain';
export default function Home() {
    
    const [translateX, setTranslateX] = useState(100);
    function onClickHandle(){
        setTranslateX(-20);
    }

    return (
        <div className='home-page'>
            <div className='home'>
                <div className='home-title'>
                    <div className='home-title-big'>
                            Hello world<br></br>
                            This is Home page
                    </div>
                    <div className='home-title-small'>
                            This is smaller text<br></br>
                            and smaller text.
                    </div>
                    
                </div>
                <div className='search-train'>
                    <button className='search-train-button hover:text-teal-500 hover:bg-white' onClick={onClickHandle} >
                        Search trains
                    </button>
                </div>
            </div>
            <div className='slidin' style={{position:'absolute', top:'0',transform:`translateX(${translateX}vw)`}}>
                <SearchTrain/>  
            </div>
        </div>
    )
}
