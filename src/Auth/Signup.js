import React, { useState } from "react";
import AppLogo from '../Assets/AppLogo.png';
import AuthImage from '../Assets/AuthImage.png';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import './Signup.css';

function Signup() {
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const newUser = async () => {
        //     console.log(email)
        //     console.log(password)
        // try {
        //     const newUser= await createUserWithEmailAndPassword(auth,email, password);
        //     console.log(newUser)
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
            <div style={{ display: 'flex', alignItems: "center", backgroundColor: "orange", height: "700px" }}>
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
                        <input className='custom-input' type={"text"} onChange={(event) => { setemail(event.target.value) }} />
                        <p className='input-label'>Password</p>
                        <input className='custom-input' type={"text"} onChange={(event) => { setpassword(event.target.value) }} />
                        <div style={{ display: "flex", alignItems: "center", width: 400, justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input type={"checkbox"} className="check-box" />
                                <p className='input-label' >Remember Me</p>
                            </div>
                            <p className='input-label' >Forgot Password ?</p>
                        </div>
                        <button className='custon-button' onClick={newUser}>SignUp</button>
                    </div>
                </div>
                <img
                    src={AuthImage}
                    style={{ width: "40%", height: "574px" }}
                    alt=''
                />
            </div>
        </>
    );


}

export default Signup;
