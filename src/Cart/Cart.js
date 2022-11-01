import React from 'react'
import TitleContainer from '../Home/components/HomeTitle';
import './Card.css';
function cart() {
    const dummyValue=[
        {id:1,title:"Technology",items:["html","css","javascript","node js"]},
        {id:3,title:"other things",items:["2 months","50,000 rs"]}
    ]
    return (
        <div>
            <TitleContainer title="Your Cart"/>
            <div className='item-card'>
                <img
                    src="https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg"
                    alt="car"
                    className='Image'
                />
                <div className='info-container'>
                    <div className='title-div'>
                        <h1>Website</h1>
                        <button className='edit-button'>edit</button>
                    </div>
                    <div className='items-all'>
                        {
                            dummyValue.map((val)=>(
                                <div className='main-values'>
                                    <h2>{val.title}</h2>
                                    <div className='items'>
                                        {
                                            val.items.map((arrVal)=>(
                                                <h4 className='item-label'>{arrVal}</h4>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='btn-div'>
                        <button className='request-button'>Request</button>
                        <button className='cancel-button'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cart