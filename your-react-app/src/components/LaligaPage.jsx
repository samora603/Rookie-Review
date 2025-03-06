import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";

// Importing images
import logo from '../images/RR images/rookie review logo.png';
import laliga1 from '../images/Laliga img/Laliga 1.jpeg';
import laliga2 from '../images/Laliga img/Laliga 2.jpeg';
import laliga3 from '../images/Laliga img/Laliga 3.jpeg';
import laliga4 from '../images/Laliga img/Laliga 4.jpeg';
import laliga5 from '../images/Laliga img/Laliga 5.jpeg';
import laliga6 from '../images/Laliga img/Laliga 6.jpeg';
import laliga7 from '../images/Laliga img/Laliga 7.jpeg';
import laligaLogo from '../images/Laliga img/Laliga.png'



const cardsData = [
  { title: "Laliga 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: laliga1},
  { title: "Laliga 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: laliga2},
  { title: "Laliga 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: laliga3 },
  { title: "Laliga 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: laliga4 },
  { title: "Laliga 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:laliga5 },
  { title: "Laliga 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: laliga6 },
  { title: "Laliga 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: laliga7 },
  { title: "Laliga 8", text: "Chelsea are eying on taking the european competition...", img: laliga2 },
  { title: "Laliga 9", text: "City out of the Fa cup after loss to liverpool...", img: laliga1 },

];

function LaligaPage() {
  return (
    <>
    <MyNavbar />
        <img 
          src={laligaLogo}
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
export default LaligaPage;

