import React from "react";
import Card from "react-bootstrap/Card";

function JobCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ul>
              <li className="about-activity">
                <strong className="purple">Desenvolvedor mobile </strong><br />
                  Daccord Music • <a style={{ color: "rgb(155 126 172)" }}>Recife, PE.</a><br />
                <p style={{ color: "rgb(155 126 172)" }}>
                  jun. 2022 - Atual
                </p>
              </li>
              <br />
              <li className="about-activity">
                <strong className="purple">Analista de suporte </strong><br />
                  Show Tecnologia • <a style={{ color: "rgb(155 126 172)" }}>Barueri, SP.</a><br />
                <p style={{ color: "rgb(155 126 172)" }}>
                  ago. 2021 - mai. 2022
                </p>
              </li>
              
            </ul>
          </p>    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
