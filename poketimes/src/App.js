import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'

class App extends Component {
  componentDidMount(){
    console.log(this.props);
    let id = this.props.,atch.params.post_id;
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/:post_id' component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
