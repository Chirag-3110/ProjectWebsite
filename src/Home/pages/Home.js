import Card from '../components/Card';
import '../css/Home.css';
function Home() {
    return (
      <>
      <div><h1>Navbar</h1></div>
        <div className='title-main-container'>
          <div className='title-div'>
            <h1 className='title-header'>Projects that you Love</h1>
            <button className='start-button'>Get in Touch</button>
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
            className='title-image'
          />
        </div>
        <div className='main-container'>
            <Card title="Website" imageLink="https://sites.udel.edu/njimenez/files/2018/05/how-to-create-a-website-feature-image-e1496943224192-1yzdyp6.jpg"/>
            <Card title="App" imageLink="https://www.webhopers.com/wp-content/uploads/2022/02/app-development-company-haridwar.jpeg"/>
            <Card title="Portfolio" imageLink="https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg?w=2000"/>
        </div>
      </>
    );
}
export default Home