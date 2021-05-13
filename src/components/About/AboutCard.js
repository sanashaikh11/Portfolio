import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ fontFamily:"SF Mono  Fira Code Fira Mono Roboto Mono monospace", color:"#64ffda" ,textAlign: "justify",fontSize:"30px" }}>
            Hi, my name is</p>
            <p style={{ fontSize:"55px", fontFamily: "Calibre San Francisco SF Pro Text"  ,color:"#ccd6f6" ,textAlign: "justify" }}>
             <b>Sana Shaikh</b></p>
             <p style={{  fontSize:"20px", fontFamily: "Calibre San Francisco SF Pro Text" ,color:"#8892b0" ,textAlign: "justify" }}>
I have a Bachelor’s degree in Computer Engineering and am really passionate about Programming and Web Development. To develop my skills further and gain more experience, I did a Post Graduate Certificate in Information Technology from Humber College, Toronto. 
<br />I have a strong understanding of multiple programming languages and software development methodologies
            I love to design solutions that improve quality of life. 
          
           </p>
           </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
