import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../style.css";
import "./h.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutcard from "./AboutCard";
import about from "../../Assets/about.png";
import Resume from "../Resume/Resume";


function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "centre", padding: "10px" }}>
        <Col
            md={4}
            style={{paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={about} alt="about" className="img-fluid"/>
          
   
      
          </Col>
          <Col
            md={7}
            style={{
              //justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* <h4 style={{ textAlign:"left"   ,paddingLeft: "20px"}}>
               <strong className="purple">About me</strong>
            </h4> */}
            <Aboutcard />
            <p style={{ fontFamily:"SF Mono  Fira Code Fira Mono Roboto Mono monospace", color:"#8892b0" ,textAlign: "justify",fontSize:"25px",textAlign:"left"   ,paddingLeft: "20px"}}>
            Here are a few <span style={{ color:"#64ffda" }}>technologies</span> I've been working with recently:
               {/* <h1 className="purple">Here are few technologies that I have been working on </h1>
          */}</p>  
            <br/>
<ul style={{ color:"#64ffda",fontFamily:"SF Mono  Fira Code Fira Mono Roboto Mono monospace" }}class="container">
    <div class="row"><div class="col-md-3 col-sm-4">
      <li>JavaScript</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>Java</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>JQuery</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>J2EE</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>C/C++</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>React</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>Python</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>HTML</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>CSS</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>XML</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>NodeJS</li>
      </div>
      <div class="col-md-3 col-sm-4">
      <li>SQL</li>
      </div>
            {/* <div class="progress blue"><span class="progress-left">
                    <span class="progress-bar"></span></span>
                <span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">Java</div>
            </div></div> */}
        {/* <div class="col-md-2 col-sm-3">
            <div class="progress yellow"> <span class="progress-left">
                    <span class="progress-bar"></span></span>
                <span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">JavaScript</div>
            </div></div>
        <div class="col-md-2 col-sm-3"><div class="progress green">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">J2EE</div>
            </div></div>
        <div class="col-md-2 col-sm-3">
            <div class="progress pink"><span class="progress-left">
                    <span class="progress-bar"></span></span>
                <span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">JQuery</div>
            </div></div>
        <div class="col-md-2 col-sm-3"><div class="progress pink">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">C/C++</div>
            </div></div>
            <div class="col-md-2 col-sm-3"><div class="progress blue">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">HTML</div>
            </div></div>
            <div class="col-md-2 col-sm-3">\<div class="progress pink">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">React</div>
            </div></div>
            <div class="col-md-2 col-sm-3">\<div class="progress orange">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">Python</div>
            </div></div>
            <div class="col-md-2 col-sm-3">\<div class="progress yellow">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">SQL</div>
            </div></div>
            <div class="col-md-2 col-sm-3">\<div class="progress green">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">XML</div>
            </div></div>
            <div class="col-md-2 col-sm-3">\<div class="progress yellow">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">NodeJs</div>
            </div></div>
            <div class="col-md-2 col-sm-3">\<div class="progress blue">
                <span class="progress-left"><span class="progress-bar"></span>
                </span><span class="progress-right"><span class="progress-bar"></span>
                </span><div class="progress-value">CSS</div>
            </div></div>
    </div> */}
</div>
</ul>

<br/>
<h4 className="project-heading" style={{ fontSize:"55px", fontFamily: "Calibre San Francisco SF Pro Text"  ,color:"#ccd6f6",textAlign:"left"   ,paddingLeft: "20px"}}>
<strong className="purple"> Software Tools </strong>
            </h4>

            <div class="container" style={{ paddingTop: "15px", paddingBottom: "10px" }}>
            <div class="row"><div class="col-md-4 col-sm-6">
    <h6 className="tech-icons">NetBeans</h6>
            </div>

            <div class="col-md-4 col-sm-6">
    <h6 className="tech-icons">Apache Tomcat</h6>
            </div>

           <div class="col-md-4 col-sm-6">
    <h6 className="tech-icons">Eclipse</h6>
            </div>

          <div class="col-md-4 col-sm-6">
    <h6 className="tech-icons3">SQL Server Management Studio</h6>
            </div>
<div class="col-md-4 col-sm-6">
    <h6 className="tech-icons2">Visual studio code </h6>
            </div>
           <div class="col-md-4 col-sm-6">
    <h6 className="tech-icons">Git</h6>
            </div>
       
                
    </div>
</div>






    
          </Col>
      
        
        </Row>
      
    
      
     
     


  
      </Container>
    </Container>
  );
}

export default About;
