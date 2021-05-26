import React, {Component} from 'react';
import {BrowserRouter, Link } from 'react-router-dom';

class JoinGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        return(
            <div className= "joinGame">
                <input placeholder= "Room Id" />
                <button>Join</button>
            </div>
        );    
    }
}

export default JoinGame;
