import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";
import Sidebar from "./Sidebar";


// Importing images
import logo from '../images/RR images/rookie review logo.png';
import cl1 from '../images/cl img/cl 1.jpeg';
import cl2 from '../images/cl img/cl 2.jpeg';
import cl3 from '../images/cl img/cl 3.jpeg';
import cl4 from '../images/cl img/cl 4.jpeg';
import cl5 from '../images/cl img/cl 5.jpeg';
import cl6 from '../images/cl img/cl 6.jpeg';
import clLogo from '../images/cl img/cl.png';

const cardsData = [
  { title: "Conference League 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: cl1},
  { title: "Conference League 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: cl2},
  { title: "Conference League 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: cl3 },
  { title: "Conference League 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: cl4 },
  { title: "Conference League 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:cl5 },
  { title: "Conference League 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: cl6 },
  { title: "Conference League 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: cl1 },
  { title: "Conference League 8", text: "Chelsea are eying on taking the european competition...", img: cl2 },
  { title: "Conference League 9", text: "City out of the Fa cup after loss to liverpool...", img: cl3 },

];
const clLinks = [
  { href: "/", text: "Home" },
  { href: "/standings", text: "Standings" },
  { href: "/fixtures", text: "Fixtures" },
  { href: "/results", text: "Results" },
  { href: "/stats", text: "Stats" },
];


function ConferenceLeague() {
  return (
    <>
    <MyNavbar />
    <Sidebar logo={clLogo} links={clLinks}/>
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
export default ConferenceLeague;

