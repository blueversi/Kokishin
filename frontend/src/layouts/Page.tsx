import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import HomePage from '../places/pages/HomePage';
import Profile from '../user/pages/Profile';
import Page404 from '../places/pages/page404';

const Page = () => {
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

export default Page;
