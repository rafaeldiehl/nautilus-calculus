import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MdRemoveRedEye, MdPerson } from 'react-icons/md';

import Background from '../../assets/images/homePageBackground.jpg';
import Logo from '../../assets/images/logoMedium.png';
import Picture from '../../assets/images/loginPerson.png';

import Button from '../../components/Button';

import './styles.scss';

const mainBackground = {
  backgroundImage: `url(${Background})`,
};

function Login() {
  function changeType() {
    const eye = document.querySelectorAll('.eye')[0];
    const passwordContent = document.getElementsByName('password')[0];

    eye.addEventListener('click', () => {
      eye.classList.toggle('active');
      if (passwordContent.type == 'password') {
        passwordContent.setAttribute('type', 'text');
      } else {
        passwordContent.setAttribute('type', 'password');
      }
    });
  }
  return (
    <div id="login" style={mainBackground}>
      <Helmet>
        <title>Nautilus Calculus • Entrar</title>
      </Helmet>
      <div className="form-container">
        <header className="form-header">
          <Link to="/"><img className="logo" src={Logo} alt="Nautilus Calculus, clique para retornar a página inicial" /></Link>
          <img src={Picture} alt="Mulher usando um computador" className="picture" />
          <h3>Bem-vindo(a) de volta!</h3>
          <p>Preencha os campos abaixo para acessar sua conta</p>
        </header>
        <div className="login-form">
          <form action="">
            <input name="name" type="text" required />
            <label htmlFor="name">
              <span className="content-name">Nome de usuário</span>
            </label>
            <MdPerson className="icon person" size="1.3rem" />
            <input name="password" type="password" required />
            <label htmlFor="password">
              <span className="content-name">Senha</span>
            </label>
            <MdRemoveRedEye className="icon eye" size="1.3rem" onClick={changeType} />
            <Button name="Entrar" />
            <p className="smallLink forgot"><a href="#">Esqueci minha senha</a></p>
            <p className="smallLink">
              Não tem uma conta?
              {' '}
              <Link to="/create-account">Crie uma!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
