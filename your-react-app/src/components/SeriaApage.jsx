import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";

// Importing images
import logo from '../images/RR images/rookie review logo.png';
import seria1 from '../images/Seria img/Seria 1.jpeg'
import seria2 from '../images/Seria img/Seria 2.jpeg'
import seria3 from '../images/Seria img/Seria 3.jpeg'
import seria4 from '../images/Seria img/Seria 4.jpeg'
import seria5 from '../images/Seria img/Seria 5.jpeg'
import seria6 from '../images/Seria img/Seria 6.jpeg'
import seria7 from '../images/Seria img/Seria 7.jpeg'
import seriaLogo from '../images/Seria img/Seria A.png'

const cardsData = [
  { title: "Seria A 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: seria1},
  { title: "Seria A 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: seria2},
  { title: "Seria A 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: seria3 },
  { title: "Seria A 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: seria4 },
  { title: "Seria A 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:seria5 },
  { title: "Seria A 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: seria6 },
  { title: "Seria A 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: seria7 },
  { title: "Seria A 8", text: "Chelsea are eying on taking the european competition...", img: seria2 },
  { title: "Seria A 9", text: "City out of the Fa cup after loss to liverpool...", img: seria3 },

];

function SeriaApage() {
  return (
    <>
    <MyNavbar />
        <img 
          src={seriaLogo}
          alt="Laliga logo" 
          style={{ height: "150px", marginRight: "15px" }} 
        />
    <Container className="my-4">
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="h-100 shadow bg-dark text-warning">
              <Card.Img variant="top" src={card.img} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}
export default SeriaApage;

