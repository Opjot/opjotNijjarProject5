import React, { Component } from 'react';
import './App.scss';

import firebase from './firebaseApp'
import  Header from './components/Header'
// import Main from './components/Main.js'
import Footer from './components/Footer'


class App extends Component {
// constructor is called to during when the page is loaded.
  constructor(){
    super()
// state is holding data that will change over time.
    this.state = {
      namesArray:[],
      userInput:'',
      teamOne:[],
      teamTwo:[],
      random:null,
      isHidden: false,
    }
  }

  componentDidMount(){
// this is where we get information from firebase.
    const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();
        for (let key in data) {
          newState.push({key: key, name: data[key]});
        }

        this.setState({
          namesArray:newState
        })
    });
  }

// changing the state.
  handleChange = (event) => {
    this.setState({userInput: event.target.value})
  }

// this is where user input is being pushed to firebase and being checked for empty sting on button click. 
  handleClick = (e) => {
    e.preventDefault();
    if(this.state.userInput === ""){
      alert("Please enter a name!")
    }else{
      const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);
    this.setState({userInput:''});
    }
  }

// this is a function that removes the name from the dom and firebase when the button is clicked. 
  removeName = (nameId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(nameId).remove()
  }

// this shuffle function is used to randomize the array. (Fisher Yates Shuffle)
  shuffle = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
          const indexSwap = Math.floor(Math.random() * (i + 1));
          const currentName = arr[i];
          const nameSwap = arr[indexSwap];
          arr[i] = nameSwap;
          arr[indexSwap] = currentName;
      };
      return arr
    }

// this randomize function is used to take the copy of the names array and use the shuffle  function to randomize the array and then populate the team 1 and team 2 arrays. The second if statement is to check for an equal number of names for equal teams in order to be displayed or else an error alert pops up. 
  randomize = () => {
    const teamOnePlaceholder = [];
    const teamTwoPlaceholder = [];
    const copyOfNamesArray = [...this.state.namesArray];
    const shuffledArray = this.shuffle(copyOfNamesArray);

    shuffledArray.map((name, index) => {
      if(index % 2 === 0){
        teamOnePlaceholder.push(name);
      }else
      {
      teamTwoPlaceholder.push(name);
      }
    });

    if (teamOnePlaceholder.length === teamTwoPlaceholder.length){
      this.setState({
      teamOne: teamOnePlaceholder,
      teamTwo: teamTwoPlaceholder,
      isHidden: true,
      })
    } else {
      alert("Please add an even number of players!")
    }
    
  };

// render begins here. There are header and footer component being imported. The main section is all here. Will look into putting it in a component when I have time to look into props. Input and buttons are linked to the click handlers. Dynamically populating the page with p tags based on user input. 
  render(){
    return (
      <div className="App wrapper">
        <Header />
        <main>
          <div className="formbut">
            <form action="submit">
              <label htmlFor="userNames"> Please type player names. </label>
              <input 
                type="text" 
                id="userNames" 
                onChange={this.handleChange} 
                value={this.state.userInput}  
              />
              <button  type="submit" onClick={this.handleClick}> Add a name! </button>
            </form>
            <button className="random" type="submit" onClick={this.randomize}>Randomize!</button>
          </div>
          <div className="userNames">
            <div className="name">
              <h3>Names</h3>
              <div>
                {this.state.namesArray.map((nameObject) => {
                return (
                  <div className="showName" key={nameObject.key}> 
                    <p>{nameObject.name}</p>
                    <button onClick={() => this.removeName(nameObject.key)}> Remove </button>
                  </div>
                )
                })}
              </div>
            </div>
            <div className="team1">
            {this.state.isHidden && <h3>Team 1</h3>}
              {this.state.teamOne.map((nameObject) => {
                return (
                  <div className="teammates" key={nameObject.key}> 
                      <p>{nameObject.name}</p>
                  </div>
                )
                })}
            </div>
            <div className="team2">
            {this.state.isHidden && <h3>Team 2</h3>}
              {this.state.teamTwo.map((nameObject) => {
                return (
                  <div className="teammates" key={nameObject.key}> 
                    <p>{nameObject.name}</p>
                  </div>
                )
                })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
};


export default App;
