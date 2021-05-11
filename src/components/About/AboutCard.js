import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color:"Black" ,textAlign: "justify" }}>
            Hello,I am <b>Sana Shaikh</b>
<br/>I have done my bachelor’s in computer Engineering and the internship for the same. I recenty persued my Post graduate Certificate in Information Technology at Humber college.
            <br /><br/>I have a strong understanding of multiple programming languages and software development methodologies
            I love to design solutions that improves quality of life of millions of people.I have woked with various web technologies and software development techniques.
          
           </p>
           </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
