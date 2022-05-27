import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './shared/components/Navigation/Header';
import Footer from './shared/components/Foooter/Footer';
import HomePage from './places/pages/HomePage';
import Profile from './user/pages/Profile';
import Page404 from './places/pages/page404';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user/BlueVersi' element={<Profile />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
