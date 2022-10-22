import React from 'react'
import '../../Contact/Pages/contact.css';
import { TextField, Box } from '@mui/material'
import Button from '@mui/material/Button';
import feedbackImage from '../../Assets/feedbackImage.jpg'
import './feedback.css';
function Feedback() {
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">Feedback</button>
            </div>
            <div className="FeedbackBox">

                <div className="FormCard">
                    <TextField id="outlined-basic" label="Name" variant="outlined" size='small' color="warning" style={{ width: "60%", borderRadius: "10px", marginRight: "10px" }} />
                    <div style={{ margin: "3% 0px" }}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size='small' color="warning" style={{ width: "60%", borderRadius: "10px" }} />
                    </div>
                    <div style={{ margin: "3% 0px" }}>
                        <TextField id="outlined-basic" label="Feedback" variant="outlined" size='Large' color="warning" rows={10} multiline style={{ width: "60%" }} />
                    </div>
                    <Button variant="contained" size="large" style={{ backgroundColor: "#FF7A00", width: "60%", fontSize: "20px" }}>Submit</Button>

                </div>
                <div className="ImageBox">
                    <img src={feedbackImage}
                        style={{ height: "500px", width: "100%" }}
                    />
                </div>
            </div>
        </>
    )
}

export default Feedback