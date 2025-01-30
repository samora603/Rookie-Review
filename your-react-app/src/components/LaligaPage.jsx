import React from 'react';
import { Link } from 'react-router-dom';

// Import images (update paths as necessary)
import laligaImage1 from '../images/Laliga img/Laliga 3.jpeg';
import laligaImage2 from '../images/Laliga img/Laliga 4.jpeg';
import laligaImage3 from '../images/Laliga img/Laliga 5.jpeg';
import laligaImage4 from '../images/Laliga img/laliga 6.jpeg';
import laligaImage5 from '../images/Laliga img/laliga 7.jpeg';
import laligaImage6 from '../images/Laliga img/Laliga 8.jpeg';

function LaligaPage() {
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
            <li><Link to="/laliga-fixtures">Fixtures</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/standings">Standings</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <h1>Latest La Liga Highlights</h1>

        {/* Highlights Section - Grid of Articles */}
        <div className="highlights">
          <a href="full-article1.html" className="article">
            <h2>Europa League: Latest Match Highlights</h2>
            <img src={laligaImage1} alt="Match Highlights" />
            <p>The Europa League continues to deliver exciting matches this season, with thrilling encounters...</p>
          </a>
          <a href="full-article2.html" className="article">
            <h2>Champions League: Key Moments</h2>
            <img src={laligaImage2} alt="Champions League Highlights" />
            <p>The Champions League is heating up with some unforgettable performances from top teams...</p>
          </a>
          <a href="full-article3.html" className="article">
            <h2>Premier League: Match Recap</h2>
            <img src={laligaImage3} alt="Premier League Match" />
            <p>In the latest Premier League action, top-tier teams fought it out in an intense contest...</p>
          </a>
          <a href="full-article4.html" className="article">
            <h2>La Liga: A Thrilling Encounter</h2>
            <img src={laligaImage4} alt="La Liga Highlights" />
            <p>La Liga is seeing an incredible season, with high-stakes matches shaping the title race...</p>
          </a>
          <a href="full-article5.html" className="article">
            <h2>Serie A: Team Standings Update</h2>
            <img src={laligaImage5} alt="Serie A Highlights" />
            <p>Serie A teams are showcasing incredible form this season, making it a race to the top...</p>
          </a>
          <a href="full-article6.html" className="article">
            <h2>Bundesliga: Top Performances</h2>
            <img src={laligaImage6} alt="Bundesliga Highlights" />
            <p>The Bundesliga has seen amazing performances with teams looking to secure European spots...</p>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Football Sports Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LaligaPage;
