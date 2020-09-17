import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import Background from '../../assets/images/homePageBackground.jpg';

import './styles.scss';

const sectionBackground = {
  backgroundImage: `url(${Background})`,
};

function Home() {
  return (
    <div id="home-page">
      <Helmet>
        <title>Nautilus Calculus</title>
      </Helmet>
      <section className="main-content" style={sectionBackground}>
        <header className="home-page-header">
          <Navbar />
        </header>
        <main className="home-page-main">
          <header className="main-header">
            <h1>
              Aprenda matemática de forma fácil
            </h1>
          </header>
          <div className="main-container">
            <p className="main-description">
              Nautilus Calculus é um projeto que visa ajudar jovens e adultos que apresentam dificuldade em
              resolver problemas matemáticos. Através de um ensino lúdico e ferramentas minimalistas,
              discalcúlicos podem aprender Matemática e resolver exercícios gratuitamente.
              Venha conferir!
            </p>
            <Button link="/learn" name="Experimentar" />
          </div>
        </main>
      </section>
      <section className="about" />
      <section className="example" />
      <section className="contact" />
      <footer className="home-page-footer" />
    </div>
  );
}

export default Home;
