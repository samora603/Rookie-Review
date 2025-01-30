import React from 'react';
import { Link } from 'react-router-dom'; // For linking to different pages

// Import images
import highlight1 from '../images/Bundesliga img/Bundesliga 1.jpeg';
import highlight2 from '../images/Bundesliga img/Bundesliga 2.jpeg';
import highlight3 from '../images/Bundesliga img/Bundesliga 3.jpeg';
import highlight4 from '../images/Bundesliga img/Bundesliga 4.jpeg';
import highlight5 from '../images/Bundesliga img/Bundesliga 5.jpeg';
import highlight6 from '../images/Bundesliga img/Bundesliga 6.jpeg';
import rookieReviewLogo from "../images/RR images/rookie review logo.png";


function HighlightsPage() {
  return (
    <div>
      {/* Site Name Section (Header) */}
      <header className="site-header">
        <div className="logo">
          <img src= {rookieReviewLogo} alt="Site Logo" />
        </div>
        <div className="news-header">
          <h1 className="site-title">Rookie Review</h1>
          <p className="tagline">Your Source for All Things Sports</p>
        </div>
      </header>

      {/* Navigation Bar */}
      <header className="top-header">
        <div className="site-title">Rookie Review</div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bundesliga-fixtures">Fixtures</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/standings">Standings</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h1>Latest Bundesliga Highlights</h1>
        {/* Highlights Section - Grid of Articles */}
        <div className="highlights">
          {/* Highlight 1 */}
          <Link to="/full-article1" className="article">
            <h2>Europa League: Latest Match Highlights</h2>
            <img src={highlight1} alt="Match Highlights" />
            <p>The Europa League continues to deliver exciting matches this season, with thrilling encounters...</p>
          </Link>
          {/* Highlight 2 */}
          <Link to="/full-article2" className="article">
            <h2>Champions League: Key Moments</h2>
            <img src={highlight2} alt="Champions League Highlights" />
            <p>The Champions League is heating up with some unforgettable performances from top teams...</p>
          </Link>
          {/* Highlight 3 */}
          <Link to="/full-article3" className="article">
            <h2>Premier League: Match Recap</h2>
            <img src={highlight3} alt="Premier League Match" />
            <p>In the latest Premier League action, top-tier teams fought it out in an intense contest...</p>
          </Link>
          {/* Highlight 4 */}
          <Link to="/full-article4" className="article">
            <h2>La Liga: A Thrilling Encounter</h2>
            <img src={highlight4} alt="La Liga Highlights" />
            <p>La Liga is seeing an incredible season, with high-stakes matches shaping the title race...</p>
          </Link>
          {/* Highlight 5 */}
          <Link to="/full-article5" className="article">
            <h2>Serie A: Team Standings Update</h2>
            <img src={highlight5} alt="Serie A Highlights" />
            <p>Serie A teams are showcasing incredible form this season, making it a race to the top...</p>
          </Link>
          {/* Highlight 6 */}
          <Link to="/full-article6" className="article">
            <h2>Bundesliga: Top Performances</h2>
            <img src={highlight6} alt="Bundesliga Highlights" />
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

export default HighlightsPage;
