import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import '../../css/GameOptions.css'

class GameOptions extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        return(
            <div className= "GameOptions">
                <h3 className= "caption" >Get Ready...</h3>
                <div className= "Options">
                    <Link to= "/new" className= "btn btn-primary">New Game </Link>
                    <Link to= "/join" className= "btn btn-primary">Join Game</Link>
                </div>
                
            </div>
        );    
    }
}

export default GameOptions;
