import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Body from "./Body";
import Sidebar from "./Sidebar";

// Importing images
import logo from '../images/RR images/rookie review logo.png';
import bundesliga1 from '../images/Bundesliga img/Bundesliga 1.jpeg';
import bundesliga2 from '../images/Bundesliga img/Bundesliga 2.jpeg';
import bundesliga3 from '../images/Bundesliga img/Bundesliga 3.jpeg';
import bundesliga4 from '../images/Bundesliga img/Bundesliga 4.jpeg';
import bundesliga5 from '../images/Bundesliga img/Bundesliga 5.jpeg';
import bundesliga6 from '../images/Bundesliga img/Bundesliga 6.jpeg';
import bundesligaLogo from '../images/Bundesliga img/Bundesliga.jpg';


const cardsData = [
  { title: "Bundesliga 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: bundesliga1},
  { title: "Bundesliga 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: bundesliga2},
  { title: "Bundesliga 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: bundesliga3 },
  { title: "Bundesliga 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: bundesliga4 },
  { title: "Bundesliga 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:bundesliga5 },
  { title: "Bundesliga 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: bundesliga6 },
  { title: "Bundesliga 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: bundesliga1 },
  { title: "Bundesliga 8", text: "Chelsea are eying on taking the european competition...", img: bundesliga2 },
  { title: "Bundesliga 9", text: "City out of the Fa cup after loss to liverpool...", img: bundesliga3 },

];
const bundesligaLinks = [
  { href: "/", text: "Home" },
  { href: "/standings", text: "Standings" },
  { href: "/fixtures", text: "Fixtures" },
  { href: "/results", text: "Results" },
  { href: "/stats", text: "Stats" },
];

function Bundesliga() {
  return (
    <>
    <MyNavbar />
    <Sidebar logo={bundesligaLogo} links={bundesligaLinks}/>
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
export default Bundesliga;

