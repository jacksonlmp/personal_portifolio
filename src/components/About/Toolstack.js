import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiHeroku,
  SiVercel,
  SiAndroidstudio,
  SiJira,
  SiBitbucket,
  SiGitlab,
  SiTrello,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
    </Row>
  );
}

export default Toolstack;
