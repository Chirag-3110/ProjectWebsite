import React from 'react'
import '../Feedback/Pages/feedback.css';
import OrderContent from './OrderContent';
import './OrderPage.css'
function OrderPage() {
    return (
        <>
            <div className="contact-div">
                <button className="contact-btn">OrderPage</button>
            </div>
            <OrderContent img="https://informationq.com/wp-content/uploads/2018/01/WebPage.jpg" OrderDesc="A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like:" Price="800" Status="Preparing" />
            <OrderContent img="https://www.ipixtechnologies.com/images/google-lens-image-recognition-apps.jpg" OrderDesc="A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like:" Price="800" Status="Preparing" />
            <OrderContent img="https://bleazyusa.com/wp-content/uploads/2016/05/mobile-dev-ft-img.png" OrderDesc="A meta description is an HTML element that contains a short summary of your page and generates the brief snippet you see underneath a sites title in Googles organic search results. Heres an example of what it usually looks like" Price="800" Status="Preparing" />

        </>
    )
}

export default OrderPage