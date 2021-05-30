import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SinglePlayer from './PlayGround/SinglePlayer.js'
import TwoPlayer from './PlayGround/TwoPlayer.js'

class PlayGround extends Component{
    constructor(props){
        super(props);
        this.props= props;
    }

    getRoomId(){
        let urlParams= new URLSearchParams(document.location.search);
        return urlParams.get("roomId");
    }

    determineSymbol(){
        let typeOfEntry= document.location.href.includes("join");

        if(typeOfEntry)
            return "O";

        return "X";
    }

    render(){
        return(
            <div className= "PlayGround">
                <BrowserRouter>
                    <Switch>
                        <Route exact path= "/play/comp" component= {SinglePlayer} />

                        <Route path= {["/play/join", "/play/new"]}>
                            <TwoPlayer roomId= {this.getRoomId()} symbol= {this.determineSymbol()} />
                        </Route>
                    </Switch>

                </BrowserRouter>
            </div>
        );    
    }
}

export default PlayGround;
