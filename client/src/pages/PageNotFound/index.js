import React from 'react';
import Helmet from 'react-helmet';
import Image from '../../assets/page-not-found.png';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return(
        <div className="page-not-found">
            <div className="image">
                <Helmet title="Página não encontrada • Nautilus Calculus" />
                <a target="_blank" href="https://br.freepik.com/fotos-vetores-gratis/negocio">
                    <img src={Image} alt="Erro 404 - Página Não encontrada" />
                </a>
            </div>
            <div className="content">
                <h1>Página não encontrada</h1>
                <p>Oops! A página que você estava procurando não existe, foi removida ou está temporariamente indisponível.</p>
                <Link to={"/"} className="btn">Acessar a página principal</Link>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#eaedff" fill-opacity="1" d="M0,0L48,5.3C96,11,192,21,288,74.7C384,128,480,224,576,218.7C672,213,768,107,864,90.7C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
};

export default PageNotFound;