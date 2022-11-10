import React, { useEffect, useState } from 'react'
import TitleContainer from '../Home/components/HomeTitle';
import { collection, query, where, getDocs  } from "firebase/firestore"; 
import {db} from '../firebase'
import './Card.css';
const Cart = () => {
    const [cardOrder,setCardOrder]=useState([]);
    useEffect(()=>{
        getOrderData()
    },[])

    const getOrderData=()=>{
        let resultArray=[];
        let conditinoOne=where("UserUid", "==", 'uhfhhsj');
        let conditionTwo=where("request", "==", 'Added');
        const baseQuery = query(collection(db,"Orders"),conditinoOne,conditionTwo);
        getDocs(baseQuery).then((res)=>{
            res.forEach((item)=>{
                resultArray.push({id:item.id,...item.data()});
            })
            setCardOrder(resultArray)
        })
    }
    return (
        <>
            <TitleContainer title="Your Cart"/>
            <div style={{width:"100%",display:'flex',alignItems:'center',flexWrap: 'wrap',justifyContent:"center"}}>
            {
                cardOrder.length===0?null:
                cardOrder.map((item)=>(
                    <div className='item-card'>
                        <img
                            src="https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg"
                            alt="web"
                            className='Image'
                        />
                        <div className='info-container'>
                            <div className='title-div'>
                                <h1>{item.projectType}</h1>
                                <button className='edit-button'>edit</button>
                            </div>
                            <div className='items-all'>
                                <p className='title'>Tech</p>
                                <div className='main-values'>
                                    <div className='items'>
                                        {
                                            item.projectTech.map((value)=>(
                                                <>
                                                    <h4 className='item-label'>{value}</h4>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='items'>
                                    <div>
                                        <h4 className='item-label'>{item.price}</h4>
                                        <p className='other-title'>Price</p>
                                    </div>
                                    <div>
                                        <h4 className='item-label'>{item.duration}</h4>
                                        <p className='other-title'>Duration</p>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-div'>
                                <button className='request-button'>{item.request}</button>
                                <button className='cancel-button'>cancel</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Cart