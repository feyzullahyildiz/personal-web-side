import React, { Component } from 'react';
import { Header } from './Header';
// import logo from './logo.svg';
// import './App.css';
import { Background } from './Background';
import { Footer } from './Footer';
import { Main } from './Main';
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
