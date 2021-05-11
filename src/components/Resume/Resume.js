import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
//import pdf from "../../Assets/Soumyajit-Behera.pdf";

function Resume() {
  


  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Developer [Internship]"
              date="Jul 2018 - Oct 2018"
              content={[
                "Gathered requirements, developed use cases, implemented designing and worked on software development Worked closely with client and team and developed a ChatBot that delivered pre-fed answers to the questions.Used swing toolkit to generate the frame structure and Keylistener interface for receiving keyboard events.Incorporated Math library and random function to generate answers from an array",
                 ]}
            />
            <h3 className="resume-title">Leadership Experience</h3>
            <Resumecontent
              title="Event co-host"
              date="Jun 2015 – Aug 2015"
              content={[
                "Member of Core Organizing Committee Organized Quest 2015, an annual cultural inter school event",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Information Technology Solutions,Postgraduate"
              date="Sept 2019 – Apr 2021"
              content={[`GPA: 83.9`]}
            />
            <Resumecontent
              title="Computer Engineering, Bachelor’s Degree"
              date="Aug 2015 - Apr 2019"
              content={["GPA: 79 "]}
            />
            <Resumecontent
              title="Cloud Certifications"
              date="Mar 2021"
              content={["Microsoft Azure Fundamentals (AZ-900)"]}
            />
           
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Resume;
