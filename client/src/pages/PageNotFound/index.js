import React from 'react';
import Helmet from 'react-helmet';
import Image from '../../assets/page-not-found.png';
import { Link } from 'react-router-dom';
import '../../styles/css/PageNotFound.css';

function PageNotFound() {
    return(
        <div className="page-not-found">
            <div className="image">
                <Helmet title="Página não encontrada • Nautilus Calculus" />
                <img src={Image} alt="Computador quebrado" />
            </div>
            <div className="content">
                <h1>ERRO <span>404</span></h1>
                <h2>Página não encontrada :(</h2>
                <p>O link solicitado não existe ou foi removido.</p>
                <Link to={"/"}>Voltar para Home</Link>
            </div>
        </div>
    )
};

export default PageNotFound;