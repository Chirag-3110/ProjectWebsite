import React, { useEffect, useState } from 'react'
import '../Feedback/Pages/feedback.css';
import './OrderPage.css'
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
function OrderPage() {
    const [orderDetail, setOrderDetail] = useState([]);
    useEffect(() => {
        getOrderData();
    }, [])
    const getOrderData = () => {
        let resultArray = [];
        let conditinoOne = where("UserUid", "==", 'xzZSZufb6kQHeM0xQsoG0dpyLAu2');
        const baseQuery = query(collection(db, "Orders"), conditinoOne);
        getDocs(baseQuery).then((res) => {
            res.forEach((item) => {
                resultArray.push({ id: item.id, ...item.data() });
            })
            setOrderDetail(resultArray)
        })
    }
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">OrderPage</button>
            </div>
            {
                orderDetail.length === 0 ? null :
                    orderDetail.map((item) => (
                        <div className='OrderMainPage'>
                            <div className='OrderDetailDiv'>
                                <h3>ProjectType - {item.projectType}</h3>
                                <img alt='' src="https://informationq.com/wp-content/uploads/2018/01/WebPage.jpg" className='OrderImg' />
                            </div>
                            <div className='OrderDetailDiv1'>
                                <h3>{item.projectName}-{item.duration}</h3>
                                <p>{item.description}</p>
                                <div style={{ display: "flex", flexDirection: "row", margin: "auto", width: "auto", textAlign: "center", justifyContent: "center", }}>
                                    {
                                        item.projectTech.map((value) => (
                                            <>
                                                <h3 style={{ textAlign: "center", margin: "2% 5%" }}>{value}</h3>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='OrderDetailDiv' style={{ marginTop: "1.8%" }}><h3>Price :{item.price}</h3> </div>
                            <div className='OrderDetailDiv' style={{ marginTop: "1.6%" }}><h3>Status-<h4 style={{ color: "green" }}>{item.request}</h4></h3>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}

export default OrderPage