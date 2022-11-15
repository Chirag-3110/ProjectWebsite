import React, { useState } from "react";
import AppLogo from '../Assets/AppLogo.png';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom'
import './Signup.css';
import EmailValidate from "../validators/EmailValidation";
import PasswordValidate from '../validators/PasswordValidation';

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const validateUser=()=>{
        try {
            if(email==="")
                throw "Please enter Email";
            if(password==="")
                throw "Please enter Password";
            if(!EmailValidate(email)){
                throw "Please enter a valid Email"
            }
            if(!PasswordValidate(password)){
                throw "Please enter a valid Password (Must Contains Capital Letter,Special Character and a Number)"
            }
            newUser();
        } catch (error) {
            console.log(error)
        }
    }
    const newUser = async () => {
        console.log("use")
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            switch (error.code) {
                case "auth/user-not-found":
                    console.log("Incorrect Email")
                    break;
                case "auth/wrong-password":
                    console.log("Incorrect Password");
                    break;
                default:
                    break;
            }
        });
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
                        <p className='input-label' >    
                            <Link style={{ textDecoration: "none", color: "black" }} to={'/ForgotPassword'}>
                                Forgot Password ?
                            </Link>
                        </p>
                        <button className='custon-button' onClick={validateUser}
                            style={{
                                backgroundColor: "#FF7A00",
                                borderWidth: 2,
                                borderColor: "#FF7A00",
                                color: "white"
                            }}
                        >
                            Login
                        </button>
                        <Link style={{ textDecoration: "none", color: "white" }} to={'/sign'}>
                            <button className='custon-button' 
                                style={{
                                    backgroundColor:"transparent",
                                    borderWidth:2,
                                    borderColor:"#FF7A00",
                                    color:"#FF7A00"
                                }}
                            >
                                SignUp
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Login;
