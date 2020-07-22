import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Helmet title="Nautilus Calculus • Aprenda Matemática de forma fácil!" />
      <h1>Home</h1>
      <Link to="/login">Entrar</Link>
      <Link to="/create-account">Criar Conta</Link>
    </div>
  );
}

export default Home;
