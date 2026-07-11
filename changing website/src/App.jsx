import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './Components/layout/Navbar'; 
import Footer from './Components/layout/Footer';
import AdminLayout from './Components/layout/AdminLayout'; // The layout with Sidebar + Admin Nav

// Public Pages
const HomePage = lazy(() => import('./Components/pages/HomePage'));
const AboutUs = lazy(() => import('./Components/pages/AboutUs'));
const Capabilities = lazy(() => import('./Components/pages/Capabilities'));
const Industries = lazy(() => import('./Components/pages/Industries'));
const EventsGallery = lazy(() => import('./Components/pages/Events'));
const StackHackathonDetails = lazy(() => import('./Components/pages/StackHackathonDetails'));
const StackHackathonRegisterForm = lazy(() => import('./Components/pages/StackHackathonRegister'));

// Admin & Auth Pages
const Login = lazy(() => import('./Components/Authentication/Login'));
const AdminDashboard = lazy(() => import('./Components/Admin/AdminDashboard'));
import ScrollToTop from './Components/Services/ScrollToTop';
const CaseStudies = lazy(() => import('./Components/pages/CaseStudies'));
const SchoolBag = lazy(() => import('./Components/pages/SchoolBagErp'));
const RealEstateEcosystem = lazy(() => import('./Components/pages/RealEstateEcosystem'));
const ElectionSurvey = lazy(() => import('./Components/pages/ElectionSurvey'));
const EcommercePlatforms = lazy(() => import('./Components/pages/EcommercePlatforms'));

// Wrapper component to handle conditional Navbar/Footer display
const AppContent = () => {
  const location = useLocation();
  
  // Define paths where we DON'T want the standard Navbar and Footer
  const isAdminPath = location.pathname.startsWith('/admin');
  const isLoginPage = location.pathname === '/hr/login';
  const hideLayout = isAdminPath || isLoginPage;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Show Navbar only if NOT on Admin or Login pages */}
      {!hideLayout && <Navbar />}
      
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600">Loading...</div>}>
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/events" element={<EventsGallery />} />
            <Route path="/events/stack-hackathon-2026" element={<StackHackathonDetails/>} />
            <Route path="/events/stack-hackathon-2026/register-form" element={<StackHackathonRegisterForm/>} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/schoolbag" element={<SchoolBag />} />
            <Route path="/realestate" element={<RealEstateEcosystem />} />
            <Route path="/electionsurvey" element={<ElectionSurvey />} />
            <Route path="/ecommerceplatforms" element={<EcommercePlatforms />} />

            {/* AUTH ROUTE (No Nav/Footer) */}
            <Route path="/hr/login" element={<Login />} />

            {/* ADMIN PRIVATE ROUTES (Uses AdminLayout with Sidebar) */}
            <Route path="/admin" element={<AdminLayout />}>
              {/* Root admin route */}
              <Route index element={<AdminDashboard />} />
              {/* Optional admin sub-page route */}
              <Route path="admin-dashboard" element={<AdminDashboard />} />
            </Route>

            {/* 404 Redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>

      {/* Show Footer only if NOT on Admin or Login pages */}
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;