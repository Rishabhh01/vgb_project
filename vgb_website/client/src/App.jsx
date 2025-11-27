// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyEmail from './components/VerifyEmail';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './ScrollToTop';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Main Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import DonationPage from './pages/DonationPage';
import MembershipPage from './pages/MembershipPage';
import NotFoundPage from './pages/NotFoundPage';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import MembershipDetailsPage from './pages/MembershipDetailsPage';
import MembershipUpgradePage from './pages/MembershipUPgradePage';


// Initiative Pages
import GauPage from './pages/initiatives/GauPage';
import GangaPage from './pages/initiatives/GangaPage';
import GayatriPage from './pages/initiatives/GayatriPage';
import GitaPage from './pages/initiatives/GitaPage';
import GuruPage from './pages/initiatives/GuruPage';
import ElementsPage from './pages/elements/ElementsPage';

import ContactPage from './pages/ContactPage';

// Import About subpages (adjust the paths if needed)
// import VisionMissionPage from './pages/about/AboutPage';
import SankalpPage from './pages/about/SankalpPage';
import BoardsDepartmentsPage from './pages/about/BoardsDepartmentsPage';
import EventCalendarPage from './pages/about/EventCalendarPage';
// import WhosWhoPage from './pages/about/WhosWhoPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* This ensures each new route scrolls to the top */}
        <div className="app">
          <Header />
          <main>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* About Subpages */}
              <Route path="/about/vision-mission" element={<AboutPage />} />
              <Route path="/about/sankalp" element={<SankalpPage />} />
              <Route path="/about/boards-departments" element={<BoardsDepartmentsPage />} />
              <Route path="/about/EventCalendar" element={<EventCalendarPage />} />
              <Route path="/about/whos-who" element={<TeamPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/donate" element={<DonationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/membership-details" element={<MembershipDetailsPage />} />
              <Route path="/membership-upgrade" element={<MembershipUpgradePage />} />
              

              {/* Authentication Pages */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

              {/* Initiative Pages */}
              <Route path="/gau" element={<GauPage />} />
              <Route path="/ganga" element={<GangaPage />} />
              <Route path="/gayatri" element={<GayatriPage />} />
              <Route path="/gita" element={<GitaPage />} />
              <Route path="/guru" element={<GuruPage />} />
              <Route path="/5elements" element={<ElementsPage />} />
              <Route path="/verify-email" element={<VerifyEmail />} />

              {/* Community Subpages */}
              <Route path="/events" element={<EventsPage />} />

              {/* Fallback for invalid routes */}
              <Route path="/No" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
