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
              : this.state.Answers.map((ans) => {
                if (ans == this.state.rightAnswer) {
                  return (<button className="right">{ans}</button>);
                } return (<button className="wrong">{ans}</button>);
              })
          }
        </>
      );
    }
}

export default Answer;
