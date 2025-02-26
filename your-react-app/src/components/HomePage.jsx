import React from "react";
import { Link } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Body from "./Body";

import uelImage from "../images/Uel img/Uel 1.jpeg";
import uclImage from "../images/Ucl img/Ucl 1.jpeg";
import eplImage from "../images/RR images/EPL.jpeg";
import laligaImage from "../images/RR images/Laliga 2.jpeg";
import seriaImage from "../images/RR images/Seria 8.jpeg";
import bundesligaImage from "../images/RR images/Bundesliga.jpeg";


const cardsData = [
  { title: "Europa League: Latest Match Highlights", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: uelImage},
  { title: "Champions League: Key Moments", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: uclImage},
  { title: "Premier League: Match Recap", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: eplImage },
  { title: "La Liga: A Thrilling Encounter", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: laligaImage },
  { title: "Serie A: Team Standings Update", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img: seriaImage },
  { title: "Bundesliga: Top Performances", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: bundesligaImage },
  { title: "Ligue 1 Match recap", text: "PSG extends their lead in the top of the Ligue 1 table...", img: uelImage },
  { title: "Conference league Match recap", text: "Chelsea are eying on taking the european competition...", img: bundesligaImage },
  { title: "Fa cup match recap", text: "City out of the Fa cup after loss to liverpool...", img: bundesligaImage },

];

function HomePage() {
  return (
    <>
    <MyNavbar />
    <Body />
    </>
  );
}
export default HomePage;
