import React, { useState } from 'react';
import AppLogo from '../Assets/AppLogo.png';
import AuthImage from '../Assets/AuthImage.png';
import './Auth.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const newUser = async () => {
        console.log(email)
        console.log(password)
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div style={{ display: 'flex', alignItems: "center" }}>
                <div className='main-container1'>
                    <div className='title-container1'>
                        <img
                            src={AppLogo}
                            className='app-logo-image'
                            alt=''
                        />
                        <h1>Welcome Back to</h1>
                        <h1 style={{ color: "#FF7A00" }}>Project Hub</h1>
                        <p className='page-title'>Please login to enter Project Hub</p>
                    </div>
                    <div className='input-field-container'>
                        <p className='input-label'>Email</p>
                        <input className='custom-input1' type={"text"} onChange={(event) => { setemail(event.target.value) }} />
                        <p className='input-label'>Password</p>
                        <input className='custom-input1' type={"text"} onChange={(event) => { setpassword(event.target.value) }} />
                        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input type={"checkbox"} className="check-box" />
                                <p className='input-label' >Remember Me</p>
                            </div>
                            <p className='input-label' >    <Link style={{ textDecoration: "none", color: "black" }} to={'/ForgotPassword'}>
                                Forgot Password ?
                            </Link></p>
                        </div>
                        <button className='custon-button1' onClick={newUser}>Login</button>
                    </div>
                </div>
                <img
                    src={AuthImage}

                    className="AuthImage"
                    alt=''
                />
            </div>
        </>
    )
}
export default Login;