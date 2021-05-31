import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class JoinGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
        this.inputBoxRef= React.createRef();
    }

    joinRoom(){
        let roomId= this.inputBoxRef.current.value;
        if(roomId.trim() === "")
            return;   
        
        let url= `/play/join?roomId=${this.inputBoxRef.current.value}`;
        document.location.href= url;
    }

    render(){
        return(
            <div className= "joinGame">
                <input placeholder= "Enter Room ID" ref= {this.inputBoxRef} />
                <button onClick= {this.joinRoom.bind(this)} >Join</button>
            </div>
        );    
    }
}

export default JoinGame;
