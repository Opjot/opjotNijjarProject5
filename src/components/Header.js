import React, { Component } from 'react'

class header extends Component{
    render(){
        return(
            <header>
                <h1>Teamify</h1>
                <div className="instructions">
                    <h2>Instruction</h2>
                    <p>1. Insert names of all players into the text box one by one.</p>
                    <p>2. click randomize!</p>
                    <p>3. You will receive two randomly generated teams.</p>
                </div>
            </header>
        )
    }
}
export default header 