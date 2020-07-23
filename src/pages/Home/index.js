import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../../components/Navbar';
import HomeContent from './styles';

const Home = () => (
  <HomeContent>
    <Helmet title="Nautilus Calculus • Aprenda Matemática de forma fácil!" />
    <header>
      <Navbar />
    </header>
  </HomeContent>
);

export default Home;
