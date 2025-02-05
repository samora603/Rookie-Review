import React from 'react';
import { Link } from 'react-router-dom'; // For navigation between pages
import "../styles/tournaments.css"
import rookieReviewLogo from "../images/RR images/rookie review logo.png";

function TournamentsPage() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo">
          <img src= {rookieReviewLogo} alt="Site Logo" />
        </div>
        <h1>Rookie Review</h1>
      </header>

      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/scores">Scores and Fixtures</Link>
        <Link to="/fan-zone">Fanzone</Link>
      </nav>

      {/* Tournaments Section */}
      <section className="tournaments">
        <h2 className="tournament-title">Tournaments</h2>

        <div className="tournament-section">
          {/* International Tournaments */}
          <Link to="/fifa_worldcup" className="tournament-item">FIFA World Cup</Link>
          <Link to="/uefa_euro" className="tournament-item">UEFA European Championship</Link>
          <Link to="/uefa_nations_league" className="tournament-item">UEFA Nations League</Link>
          <Link to="/fifa_club_worldcup" className="tournament-item">FIFA Club World Cup</Link>
          <Link to="/olympic_football" className="tournament-item">Olympic Football Tournament</Link>

          {/* UEFA Club Tournaments */}
          <Link to="/ucl" className="tournament-item">UEFA Champions League</Link>
          <Link to="/uel" className="tournament-item">UEFA Europa League</Link>
          <Link to="/conference-league" className="tournament-item">UEFA Europa Conference League</Link>
          <Link to="/uefa_supercup" className="tournament-item">UEFA Super Cup</Link>

          {/* Top 5 European Domestic Leagues */}
          <Link to="/epl" className="tournament-item">Premier League</Link>
          <Link to="/laliga" className="tournament-item">La Liga</Link>
          <Link to="/seria-a" className="tournament-item">Serie A</Link>
          <Link to="/bundesliga" className="tournament-item">Bundesliga</Link>
          <Link to="/ligue-1" className="tournament-item">Ligue 1</Link>

          {/* Other European Leagues */}
          <Link to="/eredivisie" className="tournament-item">Eredivisie</Link>
          <Link to="/primeira_liga" className="tournament-item">Primeira Liga</Link>
          <Link to="/scottish_premiership" className="tournament-item">Scottish Premiership</Link>
          <Link to="/belgian_pro_league" className="tournament-item">Belgian Pro League</Link>
          <Link to="/super_lig" className="tournament-item">Super Lig</Link>

          {/* Youth and Women's Competitions */}
          <Link to="/uefa_womens_cl" className="tournament-item">UEFA Women's Champions League</Link>
          <Link to="/fifa_u20_worldcup" className="tournament-item">FIFA U-20 World Cup</Link>
          <Link to="/fifa_u17_worldcup" className="tournament-item">FIFA U-17 World Cup</Link>
          <Link to="/uefa_u21_championship" className="tournament-item">UEFA U-21 Championship</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Rookie Review. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TournamentsPage;
