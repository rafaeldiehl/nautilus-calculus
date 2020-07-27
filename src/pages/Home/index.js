import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/Header';
import HomeContent from './styles';

const Home = () => (
  <HomeContent>
    <Helmet title="Nautilus Calculus • Aprenda Matemática de forma fácil!" />
    <Header />
  </HomeContent>
);

export default Home;
