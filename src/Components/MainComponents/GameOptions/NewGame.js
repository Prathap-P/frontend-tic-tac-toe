import React, {Component} from 'react';
import {BrowserRouter, Link } from 'react-router-dom';

class NewGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        return(
            <div className= "newGame">
                Choose Opponent

                <Link to= "/play/comp">Computer </Link>
                <Link to= "">Another Player</Link>

            </div> 
        );
    }
}

export default NewGame;
