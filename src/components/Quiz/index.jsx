import React, { Component } from 'react';

import Data from './data';

import './styles.scss';

class Quiz extends Component {
    state = {
      userAnswer: null,
      currentQuestion: 0,
      options: [],
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
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
      console.log(this.state.currentQuestion);
    }

    componentDidUpdate(prevProps, prevState) {
      const { currentQuestion } = this.state;
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => ({
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
      });
    }

    render() {
      const {
        currentQuestion, image, imageDescription, question, options, userAnswer,
      } = this.state;
      return (
        <div key={currentQuestion} className="card">
          <p className="questionNumber">{`Questão ${currentQuestion + 1} de ${Data.length}`}</p>
          <img className="questionImage" src={image} alt={imageDescription} />
          <p className="question">{question}</p>
          <div className="answers">
            {options.map((option) => (
              <button
                onClick={() => this.checkAnswer(option)}
                className={userAnswer === option ? 'selected' : null}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="next" onClick={this.nextQuestionHandler}>Próximo</button>
        </div>
      );
    }
}

export default Quiz;
