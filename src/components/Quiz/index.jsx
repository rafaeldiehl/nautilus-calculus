import React, { Component } from 'react';

import Data from './data';
import Answer from './answer';

import './styles.scss';

class Quiz extends Component {
    state = {
      dataQuestion: [],
    }

    setStateFunction = () => {
      this.setState({
        dataQuestion: Data,
      });
    }

    componentDidMount() {
      this.setStateFunction();
    }

    render() {
      return (
        <>
          {
                this.state.dataQuestion.map((data) => {
                  console.log(data);
                  return (
                    <div key={data.id} className="card">
                      <img src={data.image} />
                      <p className="question">{data.quiz}</p>
                      <div className="answers">
                        <Answer key={data.id} rightAnswer={data.rightAnswer} answer={data.findAnswer} />
                      </div>
                    </div>
                  );
                })
            }
        </>
      );
    }
}

export default Quiz;
