import React, {Component} from 'react';
import {Link } from 'react-router-dom';

class GameOptions extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        return(
            <div className= "GameOptions">
                <div className= "Options">
                    <Link to= "/new">New Game </Link>
                    <Link to= "/join">Join a Game</Link>
                </div>
                
            </div>
        );    
    }
}

export default GameOptions;
