import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    axios
      .get('/learn')
      .then(resultado => {
        console.log(resultado)
      })
  }
  render() {
    return (
      <p>Testando a interação cliente-servidor</p>
    )
  }
}

export default App;
