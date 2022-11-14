import React, { useState } from "react";
import AppLogo from '../Assets/AppLogo.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'
import './Signup.css';

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
            <div style={{
                display: 'flex',
                alignItems: "center",
                height: "100vh",
                width: '100%',
                backgroundColor: "rgba(255, 147, 39, 0.407)"
            }}
            >
                <div className='main-container'>
                    <div className='title-container'>
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
                        <input className='custom-input' type={"text"} onChange={(event) => setemail(event.target.value)}
                            placeholder="Email"

                        />
                        <p className='input-label'>Password</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setpassword(event.target.value)}
                            placeholder="Password"
                        />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%" }}>
                            <input type={"checkbox"} className="check-box" />
                            <p className='input-label' >Remember Me</p>
                        </div>
                        <p className='input-label' >    <Link style={{ textDecoration: "none", color: "black" }} to={'/ForgotPassword'}>
                            Forgot Password ?
                        </Link></p>
                        <Link style={{ textDecoration: "none", color: "white" }} to={'/log'}>
                            <button className='custon-button' onClick={newUser}
                                style={{
                                    backgroundColor: "#FF7A00",
                                    borderWidth: 2,
                                    borderColor: "#FF7A00",
                                    color: "white"
                                }}
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Login;
