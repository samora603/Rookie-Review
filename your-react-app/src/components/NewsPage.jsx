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

const cardsData = [
  { title: "Europa League: Latest Match Highlights", text: "The Europa League continues to deliver exciting matches this season, with thrilling encounters...", img: epl1},
  { title: "Champions League: Key Moments", text: "The Champions League is heating up with some unforgettable performances from top teams...", img: epl2},
  { title: "Premier League: Match Recap", text: "In the latest Premier League action, top-tier teams fought it out in an intense contest...", img: epl3 },
  { title: "La Liga: A Thrilling Encounter", text: "La Liga is seeing an incredible season, with high-stakes matches shaping the title race...", img: epl4 },
  { title: "Serie A: Team Standings Update", text: "Serie A teams are showcasing incredible form this season, making it a race to the top...", img:epl5 },
  { title: "Bundesliga: Top Performances", text: "The Bundesliga has seen amazing performances with teams looking to secure European spots...", img: epl6 },
  { title: "Ligue 1 Match recap", text: "PSG extends their lead in the top of the Ligue 1 table...", img: epl1 },
  { title: "Conference league Match recap", text: "Chelsea are eying on taking the european competition...", img: epl2 },
  { title: "Fa cup match recap", text: "City out of the Fa cup after loss to liverpool...", img: epl3 },

];

function EplPage() {
  return (
    <>
    <MyNavbar />
    <p>News Page </p>

    <Body />
    </>
  );
}
export default EplPage;

