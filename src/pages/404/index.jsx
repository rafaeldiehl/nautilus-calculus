import React from 'react';
import { Helmet } from 'react-helmet';

import Button from '../../components/Button';

import Background from '../../assets/images/pageNotFoundBackground.jpg';

import './styles.scss';

function PageNotFound() {
  return (
    <div id="not-found">
      <Helmet>
        <title>Nautilus Calculus • Página não encontrada</title>
      </Helmet>
      <main className="not-found-content">
        <h1 className="big-number">
          4
          <span className="blue-caracter">0</span>
          4
        </h1>
        <p className="subtitle">Página não encontrada</p>
        <p className="description">A página que você solicitou não existe, foi removida ou está temporariamente indisponível.</p>
        <Button link="/" name="Retornar a página principal" />
      </main>
    </div>
  );
}

export default PageNotFound;
