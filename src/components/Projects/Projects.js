import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/acadnet-removebg-preview.png";
import emotion from "../../Assets/Projects/kali-removebg-preview.png";
import editor from "../../Assets/Projects/unb.png";
import chatify from "../../Assets/Projects/mana.png";
import suicide from "../../Assets/Projects/kali-removebg-preview.png";
import bitsOfCode from "../../Assets/Projects/fll-removebg-preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hands on experience"
              description="I worked with many companies at the beginning and I helped them secure their systems.For most I dealt with web application but also with securing internet networks (Linux and Windows)."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Robotics"
              description="I am a programmer in the school robotics team where I programmed in the
              basic program of the robot and used python for more complex movements."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="UNBreakble"
              description="A year ago I participated in UNBreackable 2021, the largest cyber security competition in my country and I was ranked 7. There I learned all kinds of Pentest and Reverse Enginering techniques."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AcadNet"
              description="A 1 year ago I participated in a networking Olympiad where I ranked 16th in the country. I learned a lot of knowledge in the field of networking and I am preparing for the CCNA certification."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=""
              description="."
              ghLink=""
              // 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              //    <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
