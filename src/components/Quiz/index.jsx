import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MdHighlightOff, MdKeyboardReturn, MdAutorenew } from 'react-icons/md';

import Data from './data';

import './styles.scss';

class Quiz extends Component {
    state = {
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    }

    setStateFunction = () => {
      const { currentQuestion } = this.state;
      this.setState(() => ({
        id: Data[currentQuestion].id,
        image: Data[currentQuestion].image,
        imageDescription: Data[currentQuestion].imageDescription,
        question: Data[currentQuestion].question,
        options: Data[currentQuestion].findAnswer,
        answer: Data[currentQuestion].rightAnswer,
      }));
    }

    componentDidMount() {
      this.setStateFunction();
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
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => ({
          disabled: true,
          image: Data[currentQuestion].image,
          imageDescription: Data[currentQuestion].imageDescription,
          question: Data[currentQuestion].question,
          options: Data[currentQuestion].findAnswer,
          answer: Data[currentQuestion].rightAnswer,
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
      const { answer, userAnswer, score } = this.state;
      if (this.state.currentQuestion === Data.length - 1) {
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
        currentQuestion, image, imageDescription, question, options, userAnswer, quizEnd, disabled,
      } = this.state;

      if (quizEnd === true) {
        const { score } = this.state;

        return (
          <div className="card">
            <a className="new" href="/learn">
              <MdAutorenew className="iconNew" size="1.3rem" />
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
              <span className="colorful">{Data.length}</span>
            </p>
            { score <= (Data.length / 2)
            && (
            <>
              <h1>Oops, não foi dessa vez!</h1>
              <p>Parece que você não acertou muitas questões. Mas não desista, tente novamente!</p>
            </>
            ) }
            { score > (Data.length / 2) && score < Data.length && (
            <>
              <h1>Legal, mandou bem!</h1>
              <p>Você acertou várias questões, mas pode melhorar ainda mais. Continue tentando!</p>
            </>
            ) }
            { score == Data.length && (
            <>
              <h1>Uau, você é bom mesmo!</h1>
              <p>Você acertou todas as questões! Parabéns pelo seu ótimo desempenho.</p>
            </>
            ) }
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
            <p className="questionNumber">{`Questão ${currentQuestion + 1} de ${Data.length}`}</p>
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
          {currentQuestion < Data.length - 1
            && <button disabled={disabled} className={`next ${disabled === true ? 'disabled' : null}`} onClick={this.nextQuestionHandler}>Próximo</button>}
          {currentQuestion === Data.length - 1
            && <button className={`finish ${disabled === true ? 'disabled' : null}`} onClick={this.finishHandler}>Finalizar</button>}
        </div>
      );
    }
}

export default Quiz;
