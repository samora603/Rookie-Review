import React from 'react';
import { Link } from 'react-router-dom';

// Import images (update paths as necessary)
import ligue1Image1 from '../images/Ligue 1 img/Ligue 1 1.jpeg';
import ligue1Image2 from '../images/Ligue 1 img/Ligue 1 2.jpeg';
import ligue1Image3 from '../images/Ligue 1 img/Ligue 1 3.jpeg';
import ligue1Image4 from '../images/Ligue 1 img/Ligue 1 4.jpeg';
import ligue1Image5 from '../images/Ligue 1 img/Ligue 1 5.jpeg';
import ligue1Image6 from '../images/Ligue 1 img/Ligue 1 6.jpeg';

function Ligue1Page() {
  return (
    <div>
      {/* Site Name Section */}
      <header className="site-header">
        <div className="logo">
          <img src="/images/RR images/rookie review logo.png" alt="Site Logo" />
        </div>
        <div className="news-header">
          <h1 className="site-title">Rookie Review</h1>
          <p className="tagline">Your Source for All Things Sports</p>
        </div>
      </header>

      {/* Header */}
      <header className="top-header">
        <div className="site-title">Rookie Review</div>
        <nav className="navbar">
          <ul>
            <li><Link to="/index">Home</Link></li>
            <li><Link to="/ligue1-fixtures">Fixtures</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/standings">Standings</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h1>Latest Ligue 1 Highlights</h1>

        {/* Highlights Section - Grid of Articles */}
        <div className="highlights">
          <Link to="/full-article1" className="article">
            <h2>Europa League: Latest Match Highlights</h2>
            <img src={ligue1Image1} alt="Match Highlights" />
            <p>The Europa League continues to deliver exciting matches this season, with thrilling encounters...</p>
          </Link>
          <Link to="/full-article2" className="article">
            <h2>Champions League: Key Moments</h2>
            <img src={ligue1Image2} alt="Champions League Highlights" />
            <p>The Champions League is heating up with some unforgettable performances from top teams...</p>
          </Link>
          <Link to="/full-article3" className="article">
            <h2>Premier League: Match Recap</h2>
            <img src={ligue1Image3} alt="Premier League Match" />
            <p>In the latest Premier League action, top-tier teams fought it out in an intense contest...</p>
          </Link>
          <Link to="/full-article4" className="article">
            <h2>La Liga: A Thrilling Encounter</h2>
            <img src={ligue1Image4} alt="La Liga Highlights" />
            <p>La Liga is seeing an incredible season, with high-stakes matches shaping the title race...</p>
          </Link>
          <Link to="/full-article5" className="article">
            <h2>Serie A: Team Standings Update</h2>
            <img src={ligue1Image5} alt="Serie A Highlights" />
            <p>Serie A teams are showcasing incredible form this season, making it a race to the top...</p>
          </Link>
          <Link to="/full-article6" className="article">
            <h2>Bundesliga: Top Performances</h2>
            <img src={ligue1Image6} alt="Bundesliga Highlights" />
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

export default Ligue1Page;
