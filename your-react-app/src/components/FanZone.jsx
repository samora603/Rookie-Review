import React from "react";
import { Link } from "react-router-dom";
import "../styles/fanzone.css"; // Ensure correct CSS import

// Import images
import fanArt1 from "../images/fanzone/_.jpeg";
import fanArt2 from "../images/fanzone/Messi as a GTA6 character.jpeg";
import fanArt3 from "../images/fanzone/Messi wallpaper.jpeg";

function FanZone() {
  return (
    <div>
      {/* Header Section */}
      <header className="fan-zone-header">
        <h1>Welcome to the Fan Zone!</h1>
        <p>Connect, celebrate, and get closer to the game!</p>
      </header>

      {/* Navigation Bar */}
      <nav className="fan-zone-nav">
        <ul>
          <li><Link to="#live-chat">Live Chat</Link></li>
          <li><Link to="#polls-predictions">Polls & Predictions</Link></li>
          <li><Link to="#exclusive-merch">Exclusive Merch</Link></li>
          <li><Link to="#fan-art">Fan Art & Photos</Link></li>
          <li><Link to="#meet-greet">Meet & Greet</Link></li>
          <li><Link to="#gaming-zone">Gaming Zone</Link></li>
        </ul>
      </nav>

      {/* Live Match Chat & Watch Party */}
      <section id="live-chat" className="section">
        <h2>Live Match Chat & Watch Party</h2>
        <p>Join the conversation during live games. Cheer on your favorite team, share your thoughts, and connect with fans from around the world!</p>
        <button>Join Live Chat</button>
        <button>Start Watch Party</button>
      </section>

      {/* Polls & Predictions */}
      <section id="polls-predictions" className="section">
        <h2>Polls & Predictions</h2>
        <p>Vote on upcoming matches, predict scores, and win rewards for accurate guesses.</p>
        <button>Vote Now</button>
        <button>Make Predictions</button>
      </section>

      {/* Exclusive Merchandise */}
      <section id="exclusive-merch" className="section">
        <h2>Exclusive Merchandise</h2>
        <p>Explore limited-edition merchandise and personalized items, only available to Fan Zone members.</p>
        <button>Shop Now</button>
      </section>

      {/* Fan Art & Photography Wall */}
      <section id="fan-art" className="section">
        <h2>Fan Art & Photography</h2>
        <p>Showcase your creativity! Submit your fan art, photos, and more to be featured in the Fan Zone gallery.</p>
        <button>Submit Your Art</button>
        <div className="gallery">
          <img src={fanArt1} alt="Fan Art 1" />
          <img src={fanArt2} alt="Fan Art 2" />
          <img src={fanArt3} alt="Fan Photo 1" />
        </div>
      </section>

      {/* Meet & Greet with Legends and Mascots */}
      <section id="meet-greet" className="section">
        <h2>Meet & Greet</h2>
        <p>Get closer to the game with exclusive meet-and-greet sessions with players, legends, and mascots.</p>
        <button>Join a Session</button>
      </section>

      {/* Gaming and Esports Zone */}
      <section id="gaming-zone" className="section">
        <h2>Gaming Zone</h2>
        <p>Test your skills with fellow fans! Play sports games, fantasy leagues, and join mini esports tournaments.</p>
        <button>Play Now</button>
      </section>

      {/* Footer Section */}
      <footer className="fan-zone-footer">
        <p>&copy; 2024 Rookie Review Fan Zone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FanZone;
