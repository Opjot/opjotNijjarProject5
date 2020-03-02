import React, { Component } from 'react'

class main extends Component{
    render(){
        return(
            <main>
              <div>
                <form action="submit" onSubmit={this.handleFormSubmit}>
                  <label htmlFor="userNames"> Please type player names. </label>
                  <input type="text" id="userNames"  />
                  <button type="submit"> Add a name </button>
                </form>
                <button type="submit">Randomize!</button>
              </div>
              <div>
                <div className="name">
                  <h3>Names</h3>
                  {/* add p tag which pulls the names from firebase and displays them using variables */}
                </div>
                <div className="team2">
                  <h3>Team 1</h3>
                  {/* add p tag which pulls the names from object for team 1 and displays them using variables */}
                </div>
                <div className="team2">
                  <h3>Team 2</h3>
                  {/* add p tag which pulls the names from object for team 2 and displays them using variables */}
                </div>
              </div>
            </main>
            
            )
        }
    }


export default main 