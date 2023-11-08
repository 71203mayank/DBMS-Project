import React, {useState} from 'react'
import "./LoginPage.css"

export default function LoginPage() {
    const [translateX, setTranslateX] = useState(48);
    const [traslateOne,setTranslateOne] = useState(-50);
    const [traslateTwo,setTranslateTwo] = useState(-10);

    const handleButton1Click = () => {
        // Set the translation to a different value (Y vw)
        setTranslateX(-25); // Replace Y with the desired value in vw
        setTranslateOne(10);
        setTranslateTwo(50);
    };
    const handleButton2Click = () => {
        // Set the translation back to the initial value (X vw)
        setTranslateX(48); // Replace X with the initial value in vw
        setTranslateOne(-50);
        setTranslateTwo(-10);
    };
  return (
    <div className='login-page'>
        <div className='login-img1 login-img' style={{ transform: `translateX(${traslateOne}vw)` }}>
            <img className='circle-img' src='./Assets/suitcase.png' alt='suitcase'></img>
        </div>
        <div className='login-img2 login-img' style={{ transform: `translateX(${traslateTwo}vw)` }}>
            <img className='circle-img' src='./Assets/luggages.png' alt='suitcase'></img>
        </div>
        <div className='circle' style={{ transform: `translateX(${translateX}vw)` }}></div>
        <div className='login-container'>
            <div className='user'>
                <div className='user-card'>
                    <div className='user-card-card user-login'>
                        <div className='user-card-container user-login-card'>
                            <div> 
                                <div>

                                    <div>E-mail</div>
                                    <input name='mail' type='text'></input>
                                </div>
                                <div>
                                    <div>Password</div>
                                    <input name='password' type='password'></input>
                                </div>
                                <div>
                                    <button> Login</button>
                                    <div onClick={handleButton1Click}> Click for Sign</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user-card-card user-signup'>
                        <div className='user-card-container user-login-card'>
                            <div> 
                                <div>

                                    <div>E-mail</div>
                                    <input name='mail' type='text'></input>
                                </div>
                                <div>
                                    <div>Password</div>
                                    <input name='password' type='password'></input>
                                </div>
                                <div>
                                    <form> Sign Up</form>
                                    <div onClick={handleButton2Click}>Click for Login</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='admin'>

            </div>
        </div>
    </div>
  )
}
