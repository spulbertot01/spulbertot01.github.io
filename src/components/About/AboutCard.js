import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Popescu Vlad-Alexandru </span>
            from <span className="purple"> Valcea, Romania.</span>
            <br />I am a junior Penetration Tester with 2 year experience in the field.
            <br />
            <br />
            Apart from hacking, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The Quieter You Become, The More You Are Able To Hear!"{" "}
          </p>
          <footer className="blockquote-footer">Rumi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
