import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import TournamentsPage from './components/TournamentsPage';
import Bundesliga from './components/Bundesliga';
import BundesligaFixtures from './components/BundesligaFixtures';
import ConferenceLeague from './components/ConferenceLeague';
import ConferenceFixtures from './components/ConferenceFixtures';
import EplPage from './components/EplPage';
import EplFixtures from './components/EplFixtures';
import LaligaPage from './components/LaligaPage';
import LaligaFixtures from './components/LaligaFixtures';
import Ligue1Page from './components/Ligue1Page';
import Ligue1Fixtures from './components/Ligue1Fixtures';
import SeriaApage from './components/SeriaApage';
import SeriaAFixtures from './components/SeriaAFixtures';
import ChampionsLeague from './components/ChampionsLeague';
import UclFixtures from './components/UclFixtures';
import EuropaLeague from './components/EuropaLeague';
import UelFixtures from './components/UelFixtures';
import Standings from './components/Standings';

function App() {
  return (
    <Router>
      <div>
        {/* Optional: Navigation links could go here */}
        
        {/* Set up routing */}
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/bundesliga" element={<Bundesliga />} />
          <Route path="/bundesliga-fixtures" element={<BundesligaFixtures />} />
          <Route path="/conference-league" element={<ConferenceLeague />} />
          <Route path="/cl-fixtures" element={<ConferenceFixtures />} />
          <Route path="/epl-fixtures" element={<EplFixtures />} />
          <Route path="/epl" element={<EplPage />} />
          <Route path="/laliga" element={<LaligaPage />} />
          <Route path="/laliga-fixtures" element={<LaligaFixtures />} />
          <Route path="/ligue-1" element={<Ligue1Page />} />
          <Route path="/ligue1-fixtures" element={<Ligue1Fixtures />} />Champions League 
          <Route path="/seria-a" element={<SeriaApage />} />
          <Route path="/seria-a-fixtures" element={<SeriaAFixtures />} />
          <Route path="/ucl" element={<ChampionsLeague />} /> 
          <Route path="/ucl-fixtures" element={<UclFixtures />} />
          <Route path="/uel" element={<EuropaLeague />} />
          <Route path="/uel-fixtures" element={<UelFixtures />} />     
          <Route path="/standings" element={<Standings />} />     

          {/* 404 Page Not Found route */}
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
