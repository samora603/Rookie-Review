import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";
import Sidebar from "./Sidebar";


// Importing images
import logo from '../images/RR images/rookie review logo.png';
import uel1 from '../images/Uel img/Uel 1.jpeg';
import uel2 from '../images/Uel img/Uel 2.jpeg';
import uel3 from '../images/Uel img/Uel 3.jpeg';
import uel4 from '../images/Uel img/Uel 4.jpeg';
import uel5 from '../images/Uel img/Uel 5.jpeg';
import uel6 from '../images/Uel img/Uel 6.jpeg';
import uelLogo from '../images/Uel img/uel.png';


const cardsData = [
  { title: "Europa League 1", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: uel1},
  { title: "Europa League 2", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: uel2},
  { title: "Europa League 3", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: uel3 },
  { title: "Europa League 4", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: uel4 },
  { title: "Europa League 5", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:uel5 },
  { title: "Europa League 6", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: uel6 },
  { title: "Europa League 7", text: "PSG extends their lead in the top of the Ligue 1 table...", img: uel1 },
  { title: "Europa League 8", text: "Chelsea are eying on taking the european competition...", img: uel2 },
  { title: "Europa League 9", text: "City out of the Fa cup after loss to liverpool...", img: uel3 },

];
const uelLinks = [
  { href: "/", text: "Home" },
  { href: "/standings", text: "Standings" },
  { href: "/fixtures", text: "Fixtures" },
  { href: "/results", text: "Results" },
  { href: "/stats", text: "Stats" },
];

function EuropaLeague() {
  return (
    <>
    <MyNavbar />
    <Sidebar logo={uelLogo} links={uelLinks}/>

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
export default EuropaLeague;

