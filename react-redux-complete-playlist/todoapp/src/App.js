import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy some eggs'}
    ]
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
