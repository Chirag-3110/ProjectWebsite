import React, { useState } from 'react'
import "./Services.css"
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { TextField } from '@mui/material'
const LanguageArray = [];
const card_details = [
  {
    id: 1, type: "web", imagePath: "https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg", name: "website"
  },
  {
    id: 2, type: "app", imagePath: "https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg", name: "App"
  },
  {
    id: 3, type: "portfolio", imagePath: "https://www.uxweb-design.com/wp-content/uploads/2019/10/Web-design-1.jpg", name: "Portfolio"
  },
]
const TechDetails = [
  {
    id: 1, Language: "HTML", selected: false
  },
  {
    id: 2, Language: "Javascript", selected: false
  },
  {
    id: 3, Language: "React JS", selected: false
  },
  {
    id: 4, Language: "react Native", selected: false
  },
  {
    id: 5, Language: "AWS", selected: false
  },
  {
    id: 6, Language: "Firebase", selected: false
  },
  {
    id: 7, Language: "Node JS", selected: false
  },
]

function About() {
  const [myStyle, setMyStyle] = useState(false);
  const [projectname, setProjectname] = useState('');
  const [projectexpect, setProjectexpect] = useState('');
  const [description, setDescription] = useState('');
  const [ProjectPrice, setProjectPrice] = useState('');
  const [SelectedTech] = useState([])

  const Submitproject = async () => {
    if (projectname === "" && projectname === "" && description === "" && ProjectPrice === "") {
      console.log("Please enter all the fields")
    }
    else {
      DataFilter();
      await addDoc(collection(db, "Orders"), {
        projectname: projectname,
        projectexpect: projectexpect,
        description: description,
        projectTech: LanguageArray,
        request: "pending",
        price: ProjectPrice

      }).then((docRef) => {
        console.log(docRef.id)
      })
    }
  }
  const UpdateClicked = (id) => {
    console.log(id)
    setMyStyle(prevState => ({
      ...myStyle,
      [id]: !prevState[id]
    }))
    const rowToChange = TechDetails.findIndex(item => {
      return item.id === id;
    });

    TechDetails[rowToChange].selected = !TechDetails[rowToChange].selected;

    console.log(TechDetails);

  }
  const DataFilter = () => {
    SelectedTech.push(...TechDetails.filter(TechDetail => {
      return TechDetail.selected === true;
    }))
    let i = 0;
    for (i = 0; i < SelectedTech.length; i++) {
      LanguageArray.push(SelectedTech[i].Language)
    }
    console.log(SelectedTech[0].Language)
    console.log("ten", LanguageArray)
  }
  return (
    <div style={{ height: '100vh' }}>
      <div className="TopMain">
        <div className='title-div-container1'>
          <h1>Services</h1>
        </div>
      </div>
      <div className="MainPortion">
        <div className='scrool-container'>
          {
            card_details.map((item) => (
              <div className="innerMainPortion" style={{ padding: "25px 0px 25px 0px" }}>
                <div className="Card">
                  <div className="MainImage">
                    <img
                      src={item.imagePath}
                      alt="car"
                      className='Image'
                    />
                  </div>
                  <div>
                    <h3 className="h3">{item.name}</h3>
                    <p className="para">{item.name} is the designed</p>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="innerMainPortion1" >
          <div>
            <h3>Technologies you want</h3>
            <h2>Website</h2>
            <div className="mainBoxOption">
              <div className="BoxOption">
                {/* <div>Select Preferred Tech</div> */}
                <div className="TechDetails">
                  {
                    TechDetails.map((item, i) => (
                      <div className="TechName"
                        // style={{
                        //   backgroundColor: item.selected === true ? "grey" : "darkgrey",
                        // }}
                        key={item.id}
                        style={{
                          backgroundColor: myStyle[`${item.id}`]
                            ? "grey"
                            : "darkgrey"
                        }}
                        onClick={() => { UpdateClicked(item.id) }}>{item.Language} </div>
                    ))
                  }
                </div>
              </div>
              <div className="TechDetails">
                <TextField onChange={(event) => setProjectname(event.target.value)} id="outlined-basic" multiline label="Project Name" variant="outlined" size='small' color="warning" style={{ width: "38%", borderRadius: "10px", margin: "10px 2%", backgroundColor: "white" }} />
                <TextField onChange={(event) => setProjectexpect(event.target.value)} id="outlined-basic" multiline label="Project Expected duration (in months)" variant="outlined" size='small' color="warning" style={{ width: "38%", borderRadius: "10px", margin: "10px 2%", backgroundColor: "white" }} />
              </div>
              <div className="TechDetails" style={{ justifyContent: "flex-start", marginLeft: "8%" }}>
                <TextField onChange={(event) => setProjectPrice(event.target.value)} id="outlined-basic" multiline label="Project Price you are expecting" variant="outlined" size='small' color="warning" style={{ width: "38%", borderRadius: "10px", margin: "10px 2%", backgroundColor: "white" }} />

              </div>
              <div className="BoxOption">
                <TextField onChange={(event) => setDescription(event.target.value)} id="outlined-basic" rows={5} multiline label="Give a description about your Project" variant="outlined" size='small' color="warning" style={{ width: "83%", borderRadius: "10px", backgroundColor: "white" }} />
              </div>
              <div className="Sidebtn">

                <button className="btn" onClick={Submitproject}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} export default About