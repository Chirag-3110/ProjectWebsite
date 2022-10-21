import React from 'react'
import '../../Contact/Pages/contact.css';
import { TextField, Box } from '@mui/material'
import Button from '@mui/material/Button';
function Feedback() {
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">Feedback</button>
            </div>
            <div>
                <TextField id="outlined-basic" label="Name" variant="filled" size='small' color="warning" style={{ width: "30%", borderRadius: "10px" }} />
                <div style={{ margin: "2% 0px" }}>
                    <TextField id="outlined-basic" label="Email" variant="filled" size='small' color="warning" style={{ width: "30%", borderRadius: "10px" }} />
                </div>
                <div style={{ margin: "2% 0px" }}>
                    <TextField id="outlined-basic" label="Feedback" variant="filled" size='Large' color="warning" rows={10} multiline style={{ width: "30%" }} />
                </div>
                <Button variant="contained" size="large" style={{ backgroundColor: "#FF7A00", width: "30%", fontSize: "20px" }}>Submit</Button>

            </div>
        </>
    )
}

export default Feedback