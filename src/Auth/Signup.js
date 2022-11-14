import React, { useState } from "react";
import AppLogo from '../Assets/AppLogo.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  doc, setDoc  } from "firebase/firestore";
import { auth , db } from "../firebase";
import { Link } from 'react-router-dom'
import './Signup.css';

const Signup=()=>{
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const createNewUser = async () => {
        try {
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userRef = doc(db, 'Users', user.uid)
                setDoc(userRef,{
                    name:"chirag"
                }).then(()=>{
                    console.log(user.uid)
                })
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
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
                height:"100vh",
                width:'100%',
                backgroundColor:"rgba(255, 147, 39, 0.407)"
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
                        <p className='page-title'>Please SignUp to enter Project Hub</p>
                    </div>
                    <div className='input-field-container'>
                        <p className='input-label'>Email</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setemail(event.target.value) } 
                            placeholder="Email"
                        
                        />
                        <p className='input-label'>Password</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setpassword(event.target.value) } 
                            placeholder="Password"
                        />
                        <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between",width:"90%" }}>
                            <input type={"checkbox"} className="check-box" />
                            <p className='input-label' >Remember Me</p>
                        </div>
                        <button className='custon-button' onClick={createNewUser}
                            style={{
                                backgroundColor:"#FF7A00",
                                borderWidth:2,
                                borderColor:"#FF7A00",
                                color:"white"
                            }}
                        >
                            SignUp
                        </button>
                        <Link style={{ textDecoration: "none", color: "white" }} to={'/log'}>
                        <button className='custon-button' 
                             style={{
                                backgroundColor:"transparent",
                                borderWidth:2,
                                borderColor:"#FF7A00",
                                color:"#FF7A00"
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

export default Signup;
