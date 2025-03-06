import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";

// Importing images
import logo from '../images/RR images/rookie review logo.png';
import ligue1 from '../images/Ligue 1 img/Ligue 1 1.jpeg';
import ligue2 from '../images/Ligue 1 img/Ligue 1 2.jpeg';
import ligue3 from '../images/Ligue 1 img/Ligue 1 3.jpeg';
import ligue4 from '../images/Ligue 1 img/Ligue 1 4.jpeg';
import ligue5 from '../images/Ligue 1 img/Ligue 1 5.jpeg';
import ligue6 from '../images/Ligue 1 img/Ligue 1 6.jpeg';
import ligue1Logo from '../images/Ligue 1 img/Ligue 1.png';

const cardsData = [
  { title: "Ligue 1 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: ligue1},
  { title: "Ligue 1 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: ligue2},
  { title: "Ligue 1 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: ligue3 },
  { title: "Ligue 1 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: ligue4 },
  { title: "Ligue 1 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:ligue5 },
  { title: "Ligue 1 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: ligue6 },
  { title: "Ligue 1 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: ligue1 },
  { title: "Ligue 1 8", text: "Chelsea are eying on taking the european competition...", img: ligue2 },
  { title: "Ligue 1 9", text: "City out of the Fa cup after loss to liverpool...", img: ligue3 },

];

function Ligue1Page() {
  return (
    <>
    <MyNavbar />
        <img 
          src={ligue1Logo}
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
export default Ligue1Page;

