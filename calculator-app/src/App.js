import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state  = {
      val1:'',
      val2:'',
      operation:[
        {name:'+',i:1},
        {name:'-',i:2},
        {name:'/',i:3},
        {name:'*',i:4},
        ],
      res:'',
    };
  }
    handleClick =(t)=>{
      console.log(t);
      if(t===1){
        this.setState({
          res:parseInt(this.state.val1)+parseInt(this.state.val2)
        });
      }
      if(t===2){
        this.setState({
          res:this.state.val1-this.state.val2
        });
      }
      if(t===3){
        this.setState({
          res:this.state.val1/this.state.val2
        });
      }
      if(t===4){
        this.setState({
          res:this.state.val1*this.state.val2
        });
      }
    }
    handleNumber1 = (e) =>{
      this.setState({
        val1:e.target.value
      });
    }
    handleNumber2 = (e) =>{
      this.setState({
      val2:e.target.value});
    }
    renderItem = (item) =>{
      return <li style = {{listStyle: "none"}}><button class = 'btn btn-primary my-2'  type ='submit' onClick = {this.handleClick.bind(null,item.i)}>{item.name}</button></li>
    };
  render() {
    const operations = this.state.operation.map((item) => this.renderItem(item));
    return (
      <div className="App">
        <div>
          <input type="text" class = 'col-md-6 mb-3' onChange = {this.handleNumber1}/>
          <input type="text" class = 'col-md-6 mb-3' onChange = {this.handleNumber2}/>
        </div>
        <ul>{operations}</ul>
        <div class ='list-group-item d-flex justify-content-between lh-condensed'>
          <p>Result</p>
          <p>{this.state.res}</p>
        </div>
      </div>
    );
  }
}

export default App;
