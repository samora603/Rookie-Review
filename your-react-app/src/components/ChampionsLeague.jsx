import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";

// Importing images
import logo from '../images/RR images/rookie review logo.png';
import ucl1 from '../images/Ucl img/Ucl 1.jpeg';
import ucl2 from '../images/Ucl img/Ucl 2.jpeg';
import ucl3 from '../images/Ucl img/Ucl 3.jpeg';
import ucl4 from '../images/Ucl img/Ucl 4.jpeg';
import ucl5 from '../images/Ucl img/Ucl 5.jpeg';
import ucl6 from '../images/Ucl img/Ucl 6.jpeg';
import uclLogo from '../images/Ucl img/ucl.png';

const cardsData = [
  { title: "Champions League 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: ucl1},
  { title: "Champions League 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: ucl2},
  { title: "Champions League 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: ucl3 },
  { title: "Champions League 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: ucl4 },
  { title: "Champions League 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img: ucl5 },
  { title: "Champions League 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: ucl6 },
  { title: "Champions League 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: ucl1 },
  { title: "Champions League 8", text: "Chelsea are eying on taking the european competition...", img: ucl2 },
  { title: "Champions League 9", text: "City out of the Fa cup after loss to liverpool...", img: ucl3 },

];

function ChampionsLeague() {
  return (
    <>
    <MyNavbar />
        <img 
          src={uclLogo}
          alt="Champions League logo" 
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
export default ChampionsLeague;

