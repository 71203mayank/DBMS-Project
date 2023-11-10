import React, {useState} from 'react'
import "./LoginPage.css"
import MGcreations from '../../Components/MGcreations/MGcreations';

export default function LoginPage() {
    const [translateX, setTranslateX] = useState(45);
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
        setTranslateX(45); // Replace X with the initial value in vw
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
                {/* <div className='user-card'> */}
                    <div className='user-card-card user-login'>
                        {/* <div className='user-card-container user-login-card'> */}
                            <div> 
                                <div className='user-input-container'>

                                    <div>Username</div>
                                    <input  name='uname' type='text'></input>
                                </div>
                                <div className='user-input-container'>
                                    <div>Password</div>
                                    <input name='password' type='password'></input>
                                </div>
                                <div className='user-input-container user-button-container'>
                                    <button className='user-button'> Login</button>
                                </div>
                                <div className='user-input-container login-switch'>
                                    <p>Don't have an account?<br></br><span className='login-switch-link' onClick={handleButton1Click}>Click here</span> to sign up</p>
                                </div>
                                {/* <div onClick={handleButton1Click}> Click for Sign</div> */}
                            </div>
                        {/* </div> */}
                    </div>
                    <div className='user-card-card user-signup'>
                        {/* <div className='user-card-container user-login-card'> */}
                            <div> 
                                <div className='user-input-container'>

                                    <div>E-mail</div>
                                    <input name='mail' type='text'></input>
                                </div>
                                <div className='user-input-container'>

                                    <div>Username</div>
                                    <input name='uname' type='text'></input>
                                </div>
                                <div className='user-input-container'>
                                    <div>Password</div>
                                    <input name='password' type='password'></input>
                                </div>
                                <div className='user-input-container user-button-container'>
                                    <button className='user-button'> Sign Up</button>
                                </div>
                                {/* <div onClick={handleButton2Click}>Click for Login</div> */}
                                <div className='user-input-container login-switch'>
                                    <p>Already have an account?<br></br><span className='login-switch-link' onClick={handleButton2Click}>Click here</span> to sign in</p>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                {/* </div> */}
            </div>
            <div className='admin'>
                <div className='admin-top'>
                    <div className='admin-main'>
                        <div>
                            <div className='admin-title'>ChukChuk.com</div>
                        </div>
                    </div>
                    <div className='team-members'>
                        <u>Project Members:</u>
                        <ul>
                            <li>Hitesh G Reddy</li>
                            <li>Mayank Gupta</li>
                            <li>Bhaskar Pal</li>
                            <li>Sita</li>
                        </ul>
                    </div>
                    <div className='project-desc'>
                        <u>Project:</u>
                        <ul>
                            <li>About project</li>
                            <li>SRS</li>
                            <li>DDS</li>
                            <li>Source Code</li>
                        </ul>
                    </div>
                    
                    <div>
                        <div className='admin-name'>
                            <u>Admin Login</u>
                            <div>Username:</div>
                            <input className='admin-input' type='text'></input>
                            <div>Password:</div>
                            <input className='admin-input' type='password'></input>
                            <div><button>Login</button></div>
                        </div>
                    </div>
                </div>
                <MGcreations/>
            </div>
        </div>
    </div>
  )
}
