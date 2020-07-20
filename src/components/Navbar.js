import React from 'react';
import Logo from './Logo.js';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <Logo />
            <ul className="page-nav">
                <li><a href="#about">Sobre</a></li>
                <li><a href="#how-work">Como funciona</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            <ul className="account-nav">
                <li>
                    <Link to={{ pathname: '/create-account' }}>Criar conta</Link>
                </li>
                <li className="light-background">
                    <Link to={{ pathname: '/login' }}>Entrar</Link>
                </li>
            </ul>
            <i className="material-icons">dehaze</i>
        </nav>
    );
}

export default Navbar;
