import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';

const Page: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile/BlueVersi' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default Page;
