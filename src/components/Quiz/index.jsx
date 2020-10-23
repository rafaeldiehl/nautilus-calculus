import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MdHighlightOff, MdKeyboardReturn, MdAutorenew } from 'react-icons/md';

import Illustration from '../../assets/images/peopleLamp.jpg';

import api from './api';

import './styles.scss';

class Quiz extends Component {
    state = {
      dataQuestion: [],
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    }

    async componentDidMount() {
        const response = await api.get(this.props.path);
        const { currentQuestion } = this.state;
        this.setState(() => ({ dataQuestion: response.data.question }));
        const { dataQuestion } = this.state;
        this.setState(() => ({
          id: dataQuestion[currentQuestion].id,
          image: dataQuestion[currentQuestion].image,
          imageDescription: dataQuestion[currentQuestion].imageDescription,
          question: dataQuestion[currentQuestion].question,
          options: dataQuestion[currentQuestion].findAnswer,
          answer: dataQuestion[currentQuestion].rightAnswer,
        }));
    }

    nextQuestionHandler = () => {
      const { answer, userAnswer, score } = this.state;
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        userAnswer: null,
      });
      if (userAnswer === answer) {
        this.setState({
          score: score + 1,
        });
        console.log(score);
      }
    }

    componentDidUpdate(prevProps, prevState) {
      const { currentQuestion } = this.state;
      const { dataQuestion } = this.state;
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => ({
          disabled: true,
          image: dataQuestion[currentQuestion].image,
          imageDescription: dataQuestion[currentQuestion].imageDescription,
          question: dataQuestion[currentQuestion].question,
          options: dataQuestion[currentQuestion].findAnswer,
          answer: dataQuestion[currentQuestion].rightAnswer,
        }));
      }
    }

    checkAnswer = (answer) => {
      this.setState({
        userAnswer: answer,
        disabled: false,
      });
    }

    finishHandler = () => {
      const { answer, userAnswer, score, dataQuestion } = this.state;
      if (this.state.currentQuestion === dataQuestion.length - 1) {
        this.setState({
          quizEnd: true,
        });
        if (userAnswer === answer) {
          this.setState({
            score: score + 1,
          });
          console.log(score);
        }
      }
    }

    render() {
      const {
        dataQuestion, currentQuestion, image, imageDescription, question, options, userAnswer, quizEnd, disabled,
      } = this.state;

      if (quizEnd === true) {
        const { score } = this.state;

        return (
          <div className="card">
            <a className="new" href="/learn">
              <MdAutorenew className="iconNew" size="1rem" />
              {' '}
              Fazer novamente
            </a>
            <p className="score">
              Sua pontuação final é
              {' '}
              <span className="colorful">{score}</span>
              {' '}
              de
              {' '}
              <span className="colorful">{dataQuestion.length}</span>
            </p>
            <img src={Illustration} alt="Pessoas fazendo uma lâmpada funcionar" className="illustration" />
            <div className="scoreDescription">
              <h1 className="scoreTitle">
                { score <= 2 && 'Oops, não foi dessa vez!' }
                { score > (dataQuestion.length / 2) && score < dataQuestion.length && 'Legal, mandou bem!' }
                { score == dataQuestion.length && 'Uau, você é bom mesmo!' }
              </h1>
              <p className="scoreSubtitle">
                { score <= 2 && <span className="red">Parece que você não acertou muitas questões. Não desista, tente novamente!</span> }
                { score > (dataQuestion.length / 2) && score < dataQuestion.length && <span className="yellow">Você acertou várias questões, mas pode melhorar ainda mais. Continue tentando!</span> }
                { score == dataQuestion.length && <span className="green">Você acertou todas as questões! Parabéns pelo seu ótimo desempenho.</span> }
              </p>
            </div>
            <Link class="returnHome" to="/">
              <MdKeyboardReturn className="iconReturn" size="1rem" />
              {' '}
              Retornar a página principal
            </Link>
          </div>
        );
      }

      return (
        <div key={currentQuestion} className="card">
          <header className="quizHeader">
            <p className="questionNumber">{`Questão ${currentQuestion + 1} de ${dataQuestion.length}`}</p>
            <Link to="/"><MdHighlightOff className="icon" size="2rem" /></Link>
          </header>
          <img className="questionImage" src={image} alt={imageDescription} />
          <p className="question">{question}</p>
          <div className="answers">
            {options.map((option) => (
              <button
                onClick={() => this.checkAnswer(option)}
                className={`option ${userAnswer === option ? 'selected' : null}`}
              >
                {option}
              </button>
            ))}
          </div>
          {currentQuestion < dataQuestion.length - 1
            && <button disabled={disabled} className={`next ${disabled === true ? 'disabled' : null}`} onClick={this.nextQuestionHandler}>Próximo</button>}
          {currentQuestion === dataQuestion.length - 1
            && <button className={`finish ${disabled === true ? 'disabled' : null}`} onClick={this.finishHandler}>Finalizar</button>}
        </div>
      );
    }
}

export default Quiz;
