import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiKotlin,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiRuby,
  SiRubyonrails,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiTypescript,
  SiPython,
  SiCodeigniter,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRuby />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter />
      </Col>
    </Row>
  );
}

export default Techstack;
