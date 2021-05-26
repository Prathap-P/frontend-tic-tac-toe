import React, {Component} from 'react';
import {BrowserRouter, Link } from 'react-router-dom';

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
                    <Link to= "/new">
                        <button>
                            New Game
                        </button>                    
                    </Link>

                    <Link to= "/join">
                        <button>
                            Join a Game
                        </button>
                    </Link>

                </div>
                
            </div>
        );    
    }
}

export default GameOptions;
