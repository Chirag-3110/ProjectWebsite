import "./Services.css"
function About() {
  return (
    <>
      <div className="TopMain">
        <div className="Servicebox">

          <p className="InnerTopMain">Services</p>
        </div>
      </div>
      <div className="MainPortion">
        <div className="innerMainPortion" style={{ padding: "25px 0px 25px 0px" }}>

          <div className="Card">
            <div className="MainImage">
              <img
                src="https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg"
                alt="car"
                className='Image'

              />
            </div>
            <div>
              <h3 className="h3">Website</h3>
              <p className="para">Website is the designed
              </p>
              {/* <div style={{ padding: "10px", height: "1%", border: "1px solid green" }}> */}

              <button className="btn">Book Now</button>
              {/* </div> */}

            </div>
          </div>
        </div>

        <div className="innerMainPortion" style={{ backgroundColor: "#ffe7cb", width: "58%" }}>

          <div>
            <h3>Technologies you want</h3>
            <h2>Website</h2>
            <div className="mainBoxOption">
              <div className="BoxOption">
                <label for="Frontend" className="InfoText"> Frontend Tech</label>

                <select id="cars" className="Option">
                  <option value="React">React</option>
                  <option value="NormalWeb">HTML,CSS,Javascript</option>
                  <option value="Bootstrap">Bootstrap</option>
                  <option value="ReactMUI">React with material UI</option>
                </select>
              </div>
              <div className="BoxOption">
                <label for="Backend" className="InfoText"> Backend Tech</label>

                <select id="cars" className="Option">
                  <option value="AWS">AWS</option>
                  <option value="Firebase">Firebase</option>
                  {/* <option value="opel">Opel</option>
                  <option value="audi">Audi</option> */}
                </select>
              </div>
              <div className="BoxOption">
                <label for="cars" className="InfoText"> Project Duration</label>
                <input placeholder="hi" style={{ borderRadius: "6px", width: "18.5%", height: "30px" }} />
              </div>
              <div className="BoxOption">
                <label for="cars" className="InfoText"> Project Amount</label>
                <input placeholder="hi" style={{ borderRadius: "6px", width: "18.5%", height: "30px" }} />
              </div>
              <div className="Sidebtn">

                <button className="btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
} export default About