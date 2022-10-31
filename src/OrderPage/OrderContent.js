import React from 'react'
import './OrderPage.css'
function OrderContent(props) {
    return (
        <div className='OrderMainPage'>
            <div className='OrderDetailDiv'>
                <img src={props.img} className='OrderImg' />
            </div>
            <div className='OrderDetailDiv1'>
                <p>{props.OrderDesc}</p>
            </div>
            <div className='OrderDetailDiv' style={{ marginTop: "1.8%" }}><h3>Price :{props.Price}</h3></div>
            <div className='OrderDetailDiv' style={{ marginTop: "1.8%" }}><h3>Status:<h4 style={{ color: "green" }}>{props.Status}</h4></h3></div>
        </div>
    )
}

export default OrderContent