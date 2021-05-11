import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import inventory from "../../Assets/Projects/inventory.png";
import movie from "../../Assets/Projects/movie.png";
import fund from "../../Assets/Projects/fund.png";
import que from "../../Assets/Projects/que.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple"> Projects</strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={fund}
              isBlog={false}
              title="Fundraising Platform"
              lan="Java/Servlet/JSP,Html,CSS,Javascript,NodeJs"
              description="Led team and developed a fundraising web application for BIPOC community to view top donations, events and create charity
              events.Incorporated Payment Gateway (Stripe) to accept the donations from the users, allowing them to register for subscriptions
              (monthly donations),withdraw the raised funds for their specific Fundraisers and gmail notifications for the same.Used MySQL in backend to store user donation data and to allow admin to perform Create, Read, Update and Delete(CRUD)
              operations."
              link="https://docs.google.com/presentation/d/1D2u3282levVMXtp7xt1UofoVsDGu31wejKtupJwBv7w/edit?usp=sharing"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie rating website"
              lan="JHTML,CSS, JavaScript and jQuery"
              description="Designed an interactive and user-friendly website to help the user find the ratings and reviews of tv shows, movies, books
              and magazines.
              Implemented navigation bars and hyperlinks to navigate through different web pages.
              Used JSON-based approach to bring dynamic featured to webpages that spanned multiple domains and deployed using
              Netlify platform.
              Demonstrated website to key audience."
              link="https://monsterratings.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory Management"
              lan="Java/Servlet/JSP/EJP, SQL"
              description="It is an online shopping application.Designed customer side platform to register and validate users, add products to cart, complete purchase or claim refund.
               Developed admin side for inventory management, customer management, invoice generation and analysis of refund or
              replacement request made by the user."
              link="https://github.com/sanashaikh11/InventoryManagement"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={que}
              isBlog={false}
              title="Answer Now"
              lan="HTML,CSS, JavaScript,jQuery,React,NodeJs"
              description="It is a replica of stack overflow where users can create questions for specific categories and can answer for questions.Have deployed the website using heroku cloud platform."
              link="https://github.com/sanashaikh11/Project-Client"
            />
          </Col>

         
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
