import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/common/Layout/Layout';
import Home from './pages/Home/Home';
import Matches from './pages/Matches/Matches';
import MatchDetails from './pages/MatchDetails/MatchDetails';
import Teams from './pages/Teams/Teams';
import TeamDetails from './pages/TeamDetails/TeamDetails';
import Predictions from './pages/Predictions/Predictions';
import Analytics from './pages/Analytics/Analytics';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/matches/:id" element={<MatchDetails />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/:id" element={<TeamDetails />} />
                <Route path="/predictions" element={<Predictions />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </AppProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;