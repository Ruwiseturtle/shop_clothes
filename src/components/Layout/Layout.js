import React from 'react';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

const Layout = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Layout
