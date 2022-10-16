import React from 'react';
import '../css/Card.css'
const Card = (props) => {
    return (
        <div className='card-container'>
            <img
                src={props.imageLink}
                className='image-size'
                alt=''
            />
            <h3>Make your own {props.title}</h3>
            <button className='card-button'>
                Contact Now
            </button>
        </div>
    )
}
export default Card;