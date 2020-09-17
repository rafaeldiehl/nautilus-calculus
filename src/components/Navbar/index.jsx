import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import Logo from '../../assets/images/logoMedium.png';

import './styles.scss';

function Navbar() {
  function toggleClick() {
    const mainUl = document.querySelector('.main-topics');
    const accountUl = document.querySelector('.account-options');
    mainUl.classList.toggle('select');
    accountUl.classList.toggle('select');
  }

  return (
    <nav className="main-navbar">
      <h1 className="main-logo">
        <Link to="/">
          <img src={Logo} alt="Nautilus Calculus" />
        </Link>
      </h1>
      <ul className="main-topics">
        <li><Link className="main-topic" to="#about">Sobre</Link></li>
        <li><Link className="main-topic" to="#example">Como funciona</Link></li>
        <li><Link className="main-topic" to="#contact">Contato</Link></li>
      </ul>
      <ul className="account-options">
        <li className="login-li"><Link className="account-option login" to="/login">Entrar</Link></li>
        <li><Link className="account-option create-account" to="/create-account">Criar Conta</Link></li>
      </ul>
      <MdMenu className="icon" size="3em" onClick={toggleClick} />
    </nav>
  );
}

export default Navbar;
