import React, { Component } from 'react';

class Answer extends Component {
    state = {
      Answers: this.props.answer,
      clickCheck: true,
      rightAnswer: this.props.rightAnswer,
    };

    onAnswer = () => {
      this.setState({
        clickCheck: false,
      });
    }

    render() {
      return (
        <>
          {
            this.state.clickCheck
              ? this.state.Answers.map((ans) => <button onClick={this.onAnswer}>{ans}</button>)
              : <button>{this.state.rightAnswer}</button>
          }
        </>
      );
    }
}

export default Answer;
