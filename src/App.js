import React, { Component } from 'react';
import Header from './Header';
// import logo from './logo.svg';
// import './App.css';
import { Background } from './Background';
import MainManagerContainer from './containers/MainManagerContainer';
import Footer  from './Footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Header/>
        <MainManagerContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
