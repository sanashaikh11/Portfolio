import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card style={{ backgroundColor: " #3d3c3c48" }} className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body >
        <h5><strong className="purple">{props.title}</strong></h5>
        <b> {props.lan}</b>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        
         
        </Card.Text>
        <Button className="purple" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
