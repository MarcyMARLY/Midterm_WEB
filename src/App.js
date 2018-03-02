import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            isIndex:false,
            isAbout:false,
            isContact:false
        }
    }
    handleIndex = () => {
      this.setState({
        isIndex:true,
        isAbout:false,
        isContact:false
      });
    };
    handleAbout = () => {
      this.setState({
        isIndex:false,
        isAbout:true,
        isContact:false
      });
    };
    handleContact = () => {
      this.setState({
        isIndex:false,
        isAbout:false,
        isContact:true
      });
    };

  render() {
    if(this.state.isIndex){
      return(
        <div className="App">
          <p>My Navigation Menu</p>
          <div >
            <button type = 'submit' class = 'app-buttons-colored' onClick = {this.handleIndex}> Index </button>
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleAbout}>About</button>
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleContact}> Contact</button>
          </div>
        </div>
      );
    }else if(this.state.isAbout){
      return(
        <div className="App">
          <p>My Navigation Menu</p>
          <div >
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleIndex}> Index </button>
            <button type = 'submit' class = 'app-buttons-colored' onClick = {this.handleAbout}>About</button>
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleContact}> Contact</button>
          </div>
        </div>
      );
    }else if(this.state.isContact){
      return(
        <div className="App">
          <p>My Navigation Menu</p>
          <div >
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleIndex}> Index </button>
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleAbout}>About</button>
            <button type = 'submit' class = 'app-buttons-colored' onClick = {this.handleContact}> Contact</button>
          </div>
        </div>
      );
    }else{
      return (
        <div className="App">
          <p>My Navigation Menu</p>
          <div >
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleIndex}> Index </button>
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleAbout}>About</button>
            <button type = 'submit' class = 'app-buttons' onClick = {this.handleContact}> Contact</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
