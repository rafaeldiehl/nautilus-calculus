import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import Logo from '../Logo';
import Nav from './styles';
import Button from '../Button';

/* eslint-disable no-unused-expressions */
const Navbar = () => (
  <Nav>
    <h1>
      <Link to="/">
        <Logo size="small" />
      </Link>
    </h1>
    <ul className="topics">
      <li>
        <a href="#about">Sobre</a>
      </li>
      <li>
        <a href="#example">Como funciona</a>
      </li>
      <li>
        <a href="#contact">Contato</a>
      </li>
    </ul>
    <ul className="user-topics">
      <li>
        <Link to="/login">Entrar</Link>
      </li>
      <li>
        <Button>
          <Link to="/create-account">Criar Conta</Link>
        </Button>
      </li>
    </ul>
    <MdMenu size="3em" />
  </Nav>
);

export default Navbar;
