import React, { useState } from 'react'
import './Auth.css'
import AppLogo from '../Assets/AppLogo.png';
import AuthImage from '../Assets/AuthImage.png';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
function ForgotPassword() {
    const [email, setemail] = useState(null)
    const [Link, setLink] = useState(false)
    const ResetLink = async () => {
        console.log(email)
        console.log("hello")
        try {
            sendPasswordResetEmail(auth, email)
                .then(() => {

                    console.log("link sent successfully")
                    setLink(true)
                    setemail("")
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
        <div style={{ display: 'flex', alignItems: "center" }}>
            <div className='main-container'>
                <div className='title-container'>
                    <img
                        src={AppLogo}
                        className='app-logo-image'
                        alt=''
                    />
                    <h1>Welcome Back to</h1>
                    <h1 style={{ color: "#FF7A00" }}>Project Hub</h1>
                    <p className='page-title'>Please enter your email of Project Hub</p>
                </div>
                <div>
                    <p className='input-label' style={{ marginTop: "-50%" }}>Email</p>
                    <input className='custom-input' type={"text"} onChange={(event) => { setemail(event.target.value) }} /><br /><br />

                    {
                        Link ?

                            <p style={{ color: "green", textAlign: "center", fontSize: "18px", fontWeight: "bolder" }}>***Link send successfully***</p> : null}
                    <button className='custon-button' onClick={ResetLink}>Send Link</button>
                </div>
                {/* <div className='input-field-container'>
                    <p className='input-label'>Email</p>
                    <input className='custom-input' type={"text"} /><br></br>



                    <button className='custon-button'>Login</button>
                </div> */}
            </div >
            <img
                src={AuthImage}
                style={{ width: "40%" }}
                alt=''
            />
        </div >
    )
}

export default ForgotPassword