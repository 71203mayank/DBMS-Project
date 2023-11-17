import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

import "./LoginPage.css"
import MGcreations from '../../Components/MGcreations/MGcreations';

export default function LoginPage() {
    const navigate = useNavigate();
    const [translateX, setTranslateX] = useState(45);
    const [traslateOne,setTranslateOne] = useState(-50);
    const [traslateTwo,setTranslateTwo] = useState(-10);

    // const [signupMail, setSignUpMail] = useState('');
    // const [signupMail, setSignUpMail] = useState('');
    // const [signupMail, setSignUpMail] = useState('');

    const [email, setEmail] = useState('');
    const [username,setusername] = useState('');
    const [password,setPassword] = useState('');
    const [adminMail,setAdminMail] = useState('');
    const [adminPwd,setAdminPwd] = useState('');



    const handleButton1Click = () => {

        setusername('');
        setPassword('');
        setEmail('');
        // Set the translation to a different value (Y vw)
        setTranslateX(-25); // Replace Y with the desired value in vw
        setTranslateOne(10);
        setTranslateTwo(50);
    };
    const handleButton2Click = () => {
        setusername('');
        setPassword('');
        setEmail('');
        // Set the translation back to the initial value (X vw)
        setTranslateX(45); // Replace X with the initial value in vw
        setTranslateOne(-50);
        setTranslateTwo(-10);
    };


    const handleSignup = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://192.168.1.49:5000/signup",{email,username,password});
            console.log(response);
            // navigate('/');
        }
        catch(error){
            console.error('Signup error', error);
        }
        window.location.reload();
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.1.49:5000/login',{username, password});
            // Handle response...
            console.log(response.data);
            navigate(`/user/${response.data.user_id}`);
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const handleAdminLogin = async (e)=>{
        e.preventDefault();
        try{
            const eemail = username;
            console.log(eemail);
            console.log(password);

            const response = await axios.get('http://192.168.1.49:5000/admin', {
                params: {
                    eemail: adminMail,
                    password: adminPwd
                }
            });
            console.log(response.data);
            navigate('/admin');
        }
        catch(err){
            console.error('Admin Login Error', err);
        }
    }

  return (
    <div className='login-page'>
        <div className='login-title login-title-one'>
            ChukChuk.com
        </div>
        <div className='login-title login-title-two'>
            ChukChuk.com
        </div>
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
                            <form onSubmit={handleLogin}> 
                                <div className='user-input-container'>

                                    <div>Username</div>
                                    <input  name='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)} ></input>
                                </div>
                                <div className='user-input-container'>
                                    <div>Password</div>
                                    <input name='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                </div>
                                <div className='user-input-container user-button-container'>
                                    <button className='user-button'> Login</button>
                                </div>
                                <div className='user-input-container login-switch'>
                                    <p>Don't have an account?<br></br><span className='login-switch-link' onClick={handleButton1Click}>Click here</span> to sign up</p>
                                </div>
                                {/* <div onClick={handleButton1Click}> Click for Sign</div> */}
                            </form>
                        {/* </div> */}
                    </div>
                    <div className='user-card-card user-signup'>
                        {/* <div className='user-card-container user-login-card'> */}
                            <form onSubmit={handleSignup}> 
                                <div className='user-input-container'>

                                    <div>E-mail</div>
                                    <input name='mail' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                                </div>
                                <div className='user-input-container'>

                                    <div>Username</div>
                                    <input name='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}></input>
                                </div>
                                <div className='user-input-container'>
                                    <div>Password</div>
                                    <input name='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                                </div>
                                <div className='user-input-container user-button-container'>
                                    <button className='user-button'> Sign Up</button>
                                </div>
                                {/* <div onClick={handleButton2Click}>Click for Login</div> */}
                                <div className='user-input-container login-switch'>
                                    <p>Already have an account?<br></br><span className='login-switch-link' onClick={handleButton2Click}>Click here</span> to sign in</p>
                                </div>
                            </form>
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
                            <li>Mayank Gupta</li>
                            <li>Hitesh G Reddy</li>
                            <li>Bhaskar Pal</li>
                            <li>Sita</li>
                        </ul>
                    </div>
                    <div className='project-desc'>
                        <u>Project:</u>
                        <ul>
                            <li>About project</li>
                            <li>Source Code</li>
                            <li>Database Design Document</li>
                            <li>Software Requirements Specification</li>
                        </ul>
                    </div>
                    
                    <div>
                        <form className='admin-name' onSubmit={handleAdminLogin}>
                            <u>Admin Login</u>
                            <div>Admin mail:</div>
                            <input className='admin-input' type='text' value={adminMail} onChange={(e)=>setAdminMail(e.target.value)}></input>
                            <div>Password:</div>
                            <input className='admin-input' type='password' value={adminPwd} onChange={(e)=>setAdminPwd(e.target.value)} ></input>
                            <div><button>Login</button></div>
                        </form>
                    </div>
                </div>
                <MGcreations/>
            </div>
        </div>
    </div>
  )
}
