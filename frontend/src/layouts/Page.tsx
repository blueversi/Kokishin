import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';

const Page = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user/BlueVersi' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Page;
