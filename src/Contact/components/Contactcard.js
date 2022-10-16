import React from 'react'

function Contactcard() {
    return (
        <div className='Main-div'>
            <h2>React out to Us</h2>
            <p>We will connect you shortly one you fill the form</p>
            <div>
                <input className='input-form' type='text' placeholder="Firstname" /><br />
                <input className='input-form' type='text' placeholder="LastName" /><br />
                <input className='input-form' type='tel' placeholder="Mobile Number" /><br />
                <input className='input-form' type='text' style={{ padding: "50px 10px", height: "40px" }} placeholder="Any idea of the project" /><br />
            </div>
            <button className='Submit-btn'>Submit</button>
        </div>
    )
}

export default Contactcard