import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// You can import images as needed
import rookieReviewLogo from "../images/RR images/rookie review logo.png";

function FixturesPage() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching (Replace this with actual API call if needed)
    setTimeout(() => {
      // Example data to simulate fixtures for today's matches
      setFixtures([
        { match: 'Team A vs Team B', time: '20:00 CET' },
        { match: 'Team C vs Team D', time: '22:00 CET' },
        // Add more fixture details here
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {/* Site Name Section (Header) */}
      <header className="site-header">
        <div className="logo">
          <img src={rookieReviewLogo} alt="Site Logo" />
        </div>
        <div className="news-header">
          <h1 className="site-title">Rookie Review</h1>
          <p className="tagline">Your Source for All Things Sports</p>
        </div>
      </header>

      {/* Top Header / Navbar */}
      <header className="top-header">
        <div className="site-title">Rookie Review</div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/epl-fixtures">Fixtures</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/standings">Standings</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </ul>
        </nav>
      </header>

      {/* Fixtures Section */}
      <div className="fixtures-container">
        <h2>Today's Bundesliga Fixtures</h2>
        {loading ? (
          <div className="loader">Loading today's fixtures...</div>
        ) : (
          <div id="fixtures">
            {fixtures.length > 0 ? (
              <ul>
                {fixtures.map((fixture, index) => (
                  <li key={index}>
                    <strong>{fixture.match}</strong> - <em>{fixture.time}</em>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No fixtures available for today.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FixturesPage;
