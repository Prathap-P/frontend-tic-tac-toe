import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../../../css/JoinGame.css'

class JoinGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
        this.inputBoxRef= React.createRef();
    }

    joinRoom(){
        let inputBox= this.inputBoxRef.current;
        if(!inputBox)
            return;

        let roomId= inputBox.value;
        if(roomId.trim() === "" || roomId.length !== 5)
            return;   
        
        let url= `/play/join?roomId=${this.inputBoxRef.current.value}`;
        return url;
    }

    render(){
        return(
            <div className= "JoinGame">
                <h2 className= "caption" >Give 5 digit Id</h2>
                
                <div className= "content">
                    <input placeholder= "Enter Room ID" type= "text" ref= {this.inputBoxRef} className= "form-control" />
                    <Link to= {this.joinRoom.bind(this)} className= "btn btn-primary button" >Join</Link>
                </div>
            </div>
        );    
    }
}

export default JoinGame;
