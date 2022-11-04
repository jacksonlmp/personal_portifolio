import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Me considero uma pessoa esforçada e consigo me adaptar com facilidade. <br />
            Atualmente trabalho na <span className="purple">Daccord Music </span> como <span className="purple">Desenvolvedor de software mobile </span>
            utilizando a linguagem <span className="purple">Kotlin</span> na qual venho aperfeiçoando meus conhecimentos com o android e afins. 
            <br /><br />
            Na faculdade tenho trabalhado muito com <span className="purple">PHP</span> e <span className="purple">Laravel</span> em projetos de extensão, 
            também já tendo utilizado <span className="purple">Ruby on rails </span> e <span className="purple">Python </span>.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
