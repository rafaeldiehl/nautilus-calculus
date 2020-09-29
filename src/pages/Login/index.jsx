import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Background from '../../assets/images/homePageBackground.jpg';

import Button from '../../components/Button';

import './styles.scss';

const mainBackground = {
  backgroundImage: `url(${Background})`,
};

function Login() {
  return (
    <div id="login" style={mainBackground}>
      <Helmet>
        <title>Nautilus Calculus • Entrar</title>
      </Helmet>
      <div className="form-container">
        <div className="options">
          <Link to="/login" className="active">Entrar</Link>
          <Link to="/create-account">Criar conta</Link>
        </div>
        <div className="login-form">
          <form action="">
            <input name="name" type="text" placeholder="Nome de usuário" />
            <input name="password" type="password" placeholder="Senha" />
            <Button name="Entrar" />
            <a href="#" className="forgotPassword">Esqueci minha senha</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
