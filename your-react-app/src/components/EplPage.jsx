import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";

// Importing images
import logo from '../images/RR images/rookie review logo.png';
import epl1 from '../images/Epl Img/Epl 1.jpeg';
import epl2 from '../images/Epl Img/Epl 2.jpeg';
import epl3 from '../images/Epl Img/Epl 3.jpeg';
import epl4 from '../images/Epl Img/Epl 4.jpeg';
import epl5 from '../images/Epl Img/Epl 5.jpeg';
import epl6 from '../images/Epl Img/Epl 6.jpeg';
import eplLogo from '../images/Epl Img/Epl.jpg';

const cardsData = [
  { title: "Premier League 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: epl1},
  { title: "Premier League 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: epl2},
  { title: "Premier League 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: epl3 },
  { title: "Premier League 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: epl4 },
  { title: "Premier League 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:epl5 },
  { title: "Premier League 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: epl6 },
  { title: "Premier League 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: epl1 },
  { title: "Premier League 8", text: "Chelsea are eying on taking the european competition...", img: epl2 },
  { title: "Premier League 9", text: "City out of the Fa cup after loss to liverpool...", img: epl3 },

];

function EplPage() {
  return (
    <>
    <MyNavbar />
        <img 
          src={eplLogo}
          alt="Premier League Logo" 
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
export default EplPage;

