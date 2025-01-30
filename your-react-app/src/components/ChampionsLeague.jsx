import React from 'react';
import { Link } from 'react-router-dom';

// Import images (update paths as necessary)
import uclImage1 from '../images/Ucl img/Ucl 1.jpeg';
import uclImage2 from '../images/Ucl img/Ucl 2.jpeg';
import uclImage3 from '../images/Ucl img/Ucl 3.jpeg';
import uclImage4 from '../images/Ucl img/Ucl 4.jpeg';
import uclImage5 from '../images/Ucl img/Ucl 5.jpeg';
import uclImage6 from '../images/Ucl img/Ucl 6.jpeg';
import rookieReviewLogo from "../images/RR images/rookie review logo.png";


function UclPage() {
  return (
    <div>
      {/* Site Name Section */}
      <header className="site-header">
        <div className="logo">
          <img src={rookieReviewLogo} alt="Site Logo" />
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
            <li><Link to="/ucl-fixtures">Fixtures</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/standings">Standings</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h1>Latest Champions League Highlights</h1>

        {/* Highlights Section - Grid of Articles */}
        <div className="highlights">
          <Link to="/full-article1" className="article">
            <h2>Europa League: Latest Match Highlights</h2>
            <img src={uclImage1} alt="Match Highlights" />
            <p>The Europa League continues to deliver exciting matches this season, with thrilling encounters...</p>
          </Link>
          <Link to="/full-article2" className="article">
            <h2>Champions League: Key Moments</h2>
            <img src={uclImage2} alt="Champions League Highlights" />
            <p>The Champions League is heating up with some unforgettable performances from top teams...</p>
          </Link>
          <Link to="/full-article3" className="article">
            <h2>Premier League: Match Recap</h2>
            <img src={uclImage3} alt="Premier League Match" />
            <p>In the latest Premier League action, top-tier teams fought it out in an intense contest...</p>
          </Link>
          <Link to="/full-article4" className="article">
            <h2>La Liga: A Thrilling Encounter</h2>
            <img src={uclImage4} alt="La Liga Highlights" />
            <p>La Liga is seeing an incredible season, with high-stakes matches shaping the title race...</p>
          </Link>
          <Link to="/full-article5" className="article">
            <h2>Serie A: Team Standings Update</h2>
            <img src={uclImage5} alt="Serie A Highlights" />
            <p>Serie A teams are showcasing incredible form this season, making it a race to the top...</p>
          </Link>
          <Link to="/full-article6" className="article">
            <h2>Bundesliga: Top Performances</h2>
            <img src={uclImage6} alt="Bundesliga Highlights" />
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

export default UclPage;
