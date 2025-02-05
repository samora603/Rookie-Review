import React from "react";
import "../styles/main.css"; // Import the CSS file
import { Link } from 'react-router-dom';

// Importing images at the top
import rookieReviewLogo from "../images/RR images/rookie review logo.png";
import uelImage from "../images/Uel img/Uel 1.jpeg";
import uclImage from "../images/Ucl img/Ucl 1.jpeg";
import eplImage from "../images/RR images/EPL.jpeg";
import laligaImage from "../images/RR images/Laliga 2.jpeg";
import seriaImage from "../images/RR images/Seria 8.jpeg";
import bundesligaImage from "../images/RR images/Bundesliga.jpeg";

function HomePage() {
  return (
    <div>
      {/* Site Name Section */}
      <header className="site-header">
        <div className="logo">
          <img src={rookieReviewLogo} alt="Site Logo" />
        </div>
        <div className="news-header">
          <h1 className="site-title">Welcome to Rookie Review</h1>
          <p className="tagline">Your Source for All Things Sports</p>
        </div>
      </header>

      {/* Header */}
      <header className="top-header">
        <div className="site-title"></div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/tournaments">Tournaments</Link></li>
            <li><Link to="/scores">Scores and fixtures</Link></li>
            <li><Link to="/fan-zone">Fan Zone</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h1>Top Football Stories</h1>
        <p>Stay updated with the latest football match highlights, scores, and insights!</p>

        {/* Highlights Section - Grid of Articles */}
        <div className="highlights">
          {/* Highlight 1 */}
          <Link to="/full-article1" className="article">
            <h2>Europa League: Latest Match Highlights</h2>
            <img src={uelImage} alt="Match Highlights" />
            <p>The Europa League continues to deliver exciting matches this season, with thrilling encounters...</p>
          </Link>
          {/* Highlight 2 */}
          <Link to="/full-article2" className="article">
            <h2>Champions League: Key Moments</h2>
            <img src={uclImage} alt="Champions League Highlights" />
            <p>The Champions League is heating up with some unforgettable performances from top teams...</p>
          </Link>
          {/* Highlight 3 */}
          <Link to="/full-article3" className="article">
            <h2>Premier League: Match Recap</h2>
            <img src={eplImage} alt="Premier League Match" />
            <p>In the latest Premier League action, top-tier teams fought it out in an intense contest...</p>
          </Link>
          {/* Highlight 4 */}
          <Link to="/full-article4" className="article">
            <h2>La Liga: A Thrilling Encounter</h2>
            <img src={laligaImage} alt="La Liga Highlights" />
            <p>La Liga is seeing an incredible season, with high-stakes matches shaping the title race...</p>
          </Link>
          {/* Highlight 5 */}
          <Link to="/full-article5" className="article">
            <h2>Serie A: Team Standings Update</h2>
            <img src={seriaImage} alt="Serie A Highlights" />
            <p>Serie A teams are showcasing incredible form this season, making it a race to the top...</p>
          </Link>
          {/* Highlight 6 */}
          <Link to="/full-article6" className="article">
            <h2>Bundesliga: Top Performances</h2>
            <img src={bundesligaImage} alt="Bundesliga Highlights" />
            <p>The Bundesliga has seen amazing performances with teams looking to secure European spots...</p>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Football Sports Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
