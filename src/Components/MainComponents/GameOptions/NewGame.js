import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NewGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    createRoomID(){
        return "1234"
    }

    render(){
        return(
            <div className= "newGame">
                Choose Opponent

                <Link to= "/play/comp">Computer </Link>
                <Link to= {`/play/new?roomId=${this.createRoomID()}`} >
                    <button>Another Player</button>
                </Link>

            </div> 
        );
    }
}
export default NewGame;
