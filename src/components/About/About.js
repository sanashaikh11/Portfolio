import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "centre", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              //justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h4 style={{ textAlign:"left"   ,paddingLeft: "20px"}}>
               <strong className="purple">About me</strong>
            </h4>
            <Aboutcard />
          </Col>
        
        </Row>
        <h1 className="project-heading">
         <strong className="purple"> Professional Skillset </strong>
        </h1>
        <Row >
        <Col 
            md={4}
            style={{ paddingTop: "15px", paddingBottom: "10px" }}
          
          >
            <h6 className="tech-icons">Java</h6>
            <h6 className="tech-icons">J2EE</h6>
            <h6 className="tech-icons">JavaScript</h6>
            <h6 className="tech-icons">Jquery</h6>
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "15px", paddingBottom: "10px" }}
            
          >
            <h6 className="tech-icons">C</h6>
            <h6 className="tech-icons">C++</h6>
            <h6 className="tech-icons">HTML5</h6>
            <h6 className="tech-icons">React</h6>
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "15px", paddingBottom: "10px" }}
            
          >
            <h6 className="tech-icons">Python</h6>
            <h6 className="tech-icons">SQL</h6>
            <h6 className="tech-icons">XML</h6>
            <h6 className="tech-icons">NodeJs</h6>
          </Col>
          
</Row>

      
     
     


  
      </Container>
    </Container>
  );
}

export default About;
