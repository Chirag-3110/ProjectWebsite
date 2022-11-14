import { useContext, useEffect } from 'react';
import Card from '../components/Card';
import { getAuth, signOut } from "firebase/auth";
import TitleContainer from '../components/HomeTitle';
import '../css/Home.css';
import reviewpic from '../../Assets/reviewpic.png';
import {ContextData}  from '../../App';
function Home() {
// where ever we want to user current authnticated user info
// import context and use like below
  const { userUid,getAutherUserDetails }=useContext(ContextData);
  useEffect(()=>{
    console.log(userUid);
  },[])
  const logOut=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("logOut")
      getAutherUserDetails(null)
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
      <div className='title-main-container'>
        <div className='main-div'>
          <h1 className='title-header'>Projects that you Love</h1>
          <button className='start-button' onClick={logOut}>Get in Touch</button>
        </div>
        <img
          src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
          className='title-image'
          alt=''
        />
      </div>
      <TitleContainer title="Categories" />
      <div className='item-card-container'>
        <Card title="Website" imageLink="https://sites.udel.edu/njimenez/files/2018/05/how-to-create-a-website-feature-image-e1496943224192-1yzdyp6.jpg" />
        <Card title="App" imageLink="https://www.webhopers.com/wp-content/uploads/2022/02/app-development-company-haridwar.jpeg" />
        <Card title="Portfolio" imageLink="https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg?w=2000" />
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 20
      }}>
        <div className='query-box' >
          <TitleContainer title="Query ?" />
          <img
            src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
            className='query-image'
            alt=''
          />
          <div className='query-buttons-div'>
            <button className='query-button-1'>Contact Us</button>
            <button className='query-button-2'>Mail Us</button>
          </div>
        </div>
        <div className='review-div' >
          <h1 className='review-title'>Customer Reviews</h1>
          <img
            src={reviewpic}
            className='review-image'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
export default Home