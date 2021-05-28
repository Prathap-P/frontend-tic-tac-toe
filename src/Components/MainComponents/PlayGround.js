import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SinglePlayer from './PlayGround/SinglePlayer.js'

class PlayGround extends Component{
    constructor(props){
        super(props);
        this.props= props;
    }

    render(){
        return(
            <div className= "PlayGround">
                <BrowserRouter>
                    <Route path= "/play/comp">
                        <SinglePlayer />
                    </Route>

                </BrowserRouter>
            </div>
        );    
    }
}

export default PlayGround;
