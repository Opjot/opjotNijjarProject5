import React, { Component } from 'react';
import './App.scss';

class Main extends Component {
    constructor() {
        super()        
    }

    render() {
        return(<main>
            <div className="formbut">
              <form action="submit">
                <label htmlFor="userNames"> Please type player names. </label>
                <input 
                  type="text" 
                  id="userNames" 
                  onChange={this.props.handleChangeProp} 
                  value={this.props.userInputProp}  
                />
                <button  type="submit" onClick={this.props.handleClickProp}> Add a name! </button>
              </form>
              <button className="random" type="submit" onClick={this.props.randomizeProp}>Randomize!</button>
            </div>
            <div className="userNames">
              <div className="name">
                <h3>Names</h3>
                <div>
                  {this.props.namesProp.map((nameObject) => {
                  return (
                    <div className="showName" key={nameObject.key}> 
                      <p>{nameObject.name}</p>
                      <button onClick={() => this.props.removeNameProp(nameObject.key)}> Remove </button>
                    </div>
                  )
                  })}
                </div>
              </div>
              <div className="team1">
              {this.props.isHiddenProp && <h3>Team 1</h3>}
                {this.props.teamOneProp.map((nameObject) => {
                  return (
                    <div className="teammates" key={nameObject.key}> 
                        <p>{nameObject.name}</p>
                    </div>
                  )
                  })}
              </div>
              <div className="team2">
              {this.props.isHiddenProp && <h3>Team 2</h3>}
                {this.props.teamTwoProp.map((nameObject) => {
                  return (
                    <div className="teammates" key={nameObject.key}> 
                      <p>{nameObject.name}</p>
                    </div>
                  )
                  })}
              </div>
            </div>
          </main>)
    }
}

export default Main