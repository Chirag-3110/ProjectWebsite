import React, { useEffect, useState } from 'react'
import '../Feedback/Pages/feedback.css';
import OrderContent from './OrderContent';
import './OrderPage.css'
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
function OrderPage() {
    const [orderArray, setOrderArray] = useState([])
    useEffect(() => {
        // createNewUser();
    }, [])
    const createNewUser = async () => {
        try {
            const docRef = doc(db, "Orders", "HyYvISaH2CkCFxvA4N2q");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const OArray = docSnap.data();
                console.log(OArray)
                setOrderArray(OArray)
                console.log(orderArray)

            } else {
                console.log("No such document!");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">OrderPage</button>
            </div>
            <div className='OrderMainPage'>
                <div className='OrderDetailDiv'>
                    <img src="https://informationq.com/wp-content/uploads/2018/01/WebPage.jpg" className='OrderImg' />
                </div>
                <div className='OrderDetailDiv1'>
                    <p>A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like:</p>
                </div>
                <div className='OrderDetailDiv' style={{ marginTop: "1.8%" }}><h3>Price :900</h3></div>
                <div className='OrderDetailDiv' style={{ marginTop: "1.8%" }}><h3>Status:<h4 style={{ color: "green" }}>Preparing</h4></h3></div>
            </div>
            {/* <OrderContent img="https://informationq.com/wp-content/uploads/2018/01/WebPage.jpg" OrderDesc="A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like:" Price="800" Status="Preparing" /> */}
            <OrderContent img="https://www.ipixtechnologies.com/images/google-lens-image-recognition-apps.jpg" OrderDesc="A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like:" Price="800" Status="Preparing" />
            <OrderContent img="https://bleazyusa.com/wp-content/uploads/2016/05/mobile-dev-ft-img.png" OrderDesc="A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like" Price="800" Status="Preparing" />

        </>
    )
}

export default OrderPage