import React, { useState } from "react";
import AppLogo from '../Assets/AppLogo.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  doc, setDoc  } from "firebase/firestore";
import { auth , db } from "../firebase";
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
            <div style={{ display: 'flex', alignItems: "center", height: "700px" }}>
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
                        <input className='custom-input' type={"text"} onChange={(event) => setemail(event.target.value) } />
                        <p className='input-label'>Password</p>
                        <input className='custom-input' type={"text"} onChange={(event) => setpassword(event.target.value) } />
                        <div style={{ display: "flex", alignItems: "center", width: 400, justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input type={"checkbox"} className="check-box" />
                                <p className='input-label' >Remember Me</p>
                            </div>
                        </div>
                        <button className='custon-button' onClick={createNewUser}>SignUp</button>
                    </div>
                </div>
                {/* <img
                    src={AuthImage}
                    style={{ width: "40%", height: "574px" }}
                    alt=''
                /> */}
            </div>
        </>
    );


}

export default Signup;
