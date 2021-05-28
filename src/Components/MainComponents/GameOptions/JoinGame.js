import React, {Component} from 'react';

class JoinGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        return(
            <div className= "joinGame">
                <input placeholder= "Room Id" />
                <button>Join</button>
            </div>
        );    
    }
}

export default JoinGame;
