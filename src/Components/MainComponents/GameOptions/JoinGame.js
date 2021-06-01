import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../../../css/JoinGame.css'

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
            <div className= "JoinGame">
                <input placeholder= "Enter Room ID" type= "text" ref= {this.inputBoxRef} className= "form-control" />
                <button onClick= {this.joinRoom.bind(this)} className= "btn btn-primary button" >Join</button>
            </div>
        );    
    }
}

export default JoinGame;
