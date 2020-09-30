import React, { Component } from 'react';

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
            <h1>
              GAME OVER! Sua pontuação é
              {' '}
              {score}
            </h1>
          </div>
        );
      }

      return (
        <div key={currentQuestion} className="card">
          <p className="questionNumber">{`Questão ${currentQuestion + 1} de ${Data.length}`}</p>
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
            && <button className="finish" onClick={this.finishHandler}>Finalizar</button>}
        </div>
      );
    }
}

export default Quiz;
