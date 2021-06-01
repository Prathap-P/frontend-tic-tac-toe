import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../css/NewGame.css'

class NewGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    createRoomID(){
        return parseInt(10000 + (Math.random() * 90000))
    }

    render(){
        return(
            <div className= "NewGame">
                <h3 className= "caption" >Choose Opponent</h3>
                
                <div className= "options">
                    <Link to= "/play/comp" className= "btn btn-primary">Computer </Link>
                    <Link to= {`/play/new?roomId=${this.createRoomID()}`} className= "btn btn-primary">
                        Player
                    </Link>
                </div>

            </div> 
        );
    }
}
export default NewGame;
