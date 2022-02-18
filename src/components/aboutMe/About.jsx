import React from "react";
import "./about.css";
import img from "../../images/about.png";
import { Button } from "@mui/material";

const About = () => {
  return (
    <>
      <div className="about-div" id="AboutUs" style={{ marginBottom: "20px" }}>
        <h3>A Little About Me And My Passion</h3>
        <div className="about-child">
          <div className="about-left">
            <img src={img} alt="" />
          </div>
          <div className="about-right">
            <div className="btn-top">
              <Button> REACT JS</Button>
              <Button> NODE JS</Button>
              <Button> EXPRESS JS</Button>
            </div>
            <p className="parigraph">
              Hello world! 👋 I'ts me Shams ur rahman, I am a full-stake MERN web developer
              with a huge passion to make the web look good and accessible using
              modern web libraries and frameworks.I use all 4 technologies combine to make a full stake 
              single page web application with awesome functionilities and styling
              I create responsive website using diffrent frameworks
              like bootstrap and MUI responsive grid stystem as well as CSS.
              Now i am improveing my programming and styling skills knowledge day by day.
              Thank you for reading about me.To know about you please contect me...
            </p>
            <div className="btn-bottom">
              <Button> MUI</Button>
              <Button> BOOTSTRAP</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
