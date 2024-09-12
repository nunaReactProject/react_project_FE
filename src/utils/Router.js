import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './../pages/Mainpage/Mainpage';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import Login from '../pages/Login/Login';

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
