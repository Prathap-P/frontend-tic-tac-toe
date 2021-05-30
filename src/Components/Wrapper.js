import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import GameOptions from "./MainComponents/GameOptions.js";
import JoinGame from "./MainComponents/GameOptions/JoinGame.js";
import NewGame from "./MainComponents/GameOptions/NewGame.js";
import PlayGround from "./MainComponents/PlayGround.js";

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

                    <Link to= "/">
                        <h1 class= "heading">
                            Tic-Tac-Toe
                        </h1>
                    </Link>

                    <Switch>
                        
                        <Route exact path= "/join">
                            <JoinGame />
                        </Route>

                        <Route exact path= "/new">
                            <NewGame />
                        </Route>

                        <Route path= "/play">
                            <PlayGround />
                        </Route>

                        <Route path= "/">
                            <GameOptions />
                        </Route>

                    </Switch>
                
                </BrowserRouter>
            </div>
        );    
    }
}

export default MainContent;
