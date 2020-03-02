import React, { Component } from 'react';
import './App.scss';

import firebase from './firebaseApp'
// import  Header from './components/Header'
// import Main from './components/Main.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      namesArray:[],
      userInput:'',
      teamOne:[],
      teamTwo:[],
      random:null,
    }
  }

  componentDidMount(){
    const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
      
        const newState = [];

        const data = response.val();

        for (let key in data) {
          // newState.push(data[key]);
          newState.push({key: key, name: data[key]});
          // console.log(key, data[key])
        }

        this.setState({
          namesArray:newState
        })
    });
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);
    this.setState({userInput:''})
  }

  removeName = (nameId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(nameId).remove()
  }

  randomize = () => {
    const teamOnePlaceholder = [];
    const teamTwoPlaceholder = [];
  this.state.namesArray.map((name, index) => {
    if(index % 2 === 0){
      teamOnePlaceholder.push(name);
    }else
    {
    teamTwoPlaceholder.push(name)
    }
  
    this.setState({
      teamOne: teamOnePlaceholder,
      teamTwo: teamTwoPlaceholder,
    })
  })
  };


  render(){
    return (
      <div className="App">
        <header>
          <h1>Teamify</h1>
          <div>
              <h2>Instruction</h2>
              <p>1. Insert names of all players into the text box one by one.</p>
              <p>2. click randomize!</p>
              <p>3. You will receive two randomly generated teams.</p>
          </div>
        </header>
        <main>
          <div>
            <form action="submit">
              <label htmlFor="userNames"> Please type player names. </label>
              <input 
                type="text" 
                id="userNames" 
                onChange={this.handleChange} 
                value={this.state.userInput}  
              />
              <button type="submit" onClick={this.handleClick}> Add a name </button>
            </form>
            <button type="submit" onClick={this.randomize}>Randomize!</button>
          </div>
          <div>
            <div className="name">
              <h3>Names</h3>
              <div>
                {this.state.namesArray.map((nameObject) => {
                return (
                  <div key={nameObject.key}> 
                    <p>{nameObject.name}</p>
                    <button onClick={() => this.removeName(nameObject.key)}> Remove </button>
                  </div>
                )
                })}
              </div>
            </div>
            <div className="team2">
              <h3>Team 1</h3>
              {this.state.teamOne.map((nameObject) => {
                return (
                  <div key={nameObject.key}> 
                    <p>{nameObject.name}</p>
                  </div>
                )
                })}
            </div>
            <div className="team2">
              <h3>Team 2</h3>
              {this.state.teamTwo.map((nameObject) => {
                return (
                  <div key={nameObject.key}> 
                    <p>{nameObject.name}</p>
                  </div>
                )
                })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
