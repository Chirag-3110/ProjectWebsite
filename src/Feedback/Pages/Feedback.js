import React, { useState } from 'react'
import '../../Contact/Pages/contact.css';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import feedbackImage from '../../Assets/feedbackImage.jpg'
import './feedback.css';
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Feedback() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [feedback, setFeedback] = useState('')
    const SubmitFeedback = async () => {
        if (email === "" && name === "" && feedback === "") {
            console.log("enter all the field please")
        }
        else {
            try {
                console.log(name)
                console.log(email)
                console.log(feedback)
                await addDoc(collection(db, "FeedBack"), {
                    name: name,
                    email: email,
                    feedback: feedback
                }).then((docRef) => {
                    console.log(docRef.id)
                    toast.success('🦄 Your feedback is submitted', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        theme: "light",
                    });
                }).catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                });
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">Feedback</button>
            </div>
            <div className="FeedbackBox">

                <div className="FormCard">
                    <TextField onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" size='small' color="warning" style={{ width: "60%", borderRadius: "10px", marginRight: "10px" }} />
                    <div style={{ margin: "3% 0px" }}>
                        <TextField onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" size='small' color="warning" style={{ width: "60%", borderRadius: "10px" }} />
                    </div>
                    <div style={{ margin: "3% 0px" }}>
                        <TextField onChange={(event) => setFeedback(event.target.value)} id="outlined-basic" label="Feedback" variant="outlined" size='Large' color="warning" rows={10} multiline style={{ width: "60%" }} />
                    </div>
                    <Button variant="contained" size="large" style={{ backgroundColor: "#FF7A00", width: "60%", fontSize: "20px" }} onClick={SubmitFeedback}>Submit</Button>

                </div>
                <div className="ImageBox">
                    <img src={feedbackImage}
                        style={{ height: "500px", width: "100%" }}
                        alt=""
                    />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Feedback