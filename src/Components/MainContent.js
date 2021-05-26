import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import GameOptions from "./MainComponents/GameOptions.js";
import JoinGame from "./MainComponents/GameOptions/JoinGame.js";
import NewGame from "./MainComponents/GameOptions/NewGame.js";

class MainContent extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        return(
            <div className= "MainContent">
                <BrowserRouter>

                    <Route exact path= "/">
                        <GameOptions />
                    </Route>

                    <Route exact path= "/join">
                        <JoinGame />
                    </Route>

                    <Route exact path= "/new">
                        <NewGame />
                    </Route>
                
                </BrowserRouter>
            </div>
        );    
    }
}

export default MainContent;