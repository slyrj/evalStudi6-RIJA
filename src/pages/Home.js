import React from 'react';
import Footer from '../components/Footer';
import HomeHead from '../components/HomeHead';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <>
      <HomeHead />
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Charles Cantin</h1>
          <h2>Photographe</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
