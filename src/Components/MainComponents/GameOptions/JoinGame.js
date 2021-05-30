import React, {Component} from 'react';

class JoinGame extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
        this.inputBoxRef= React.createRef();
    }

    joinRoom(){
        let url= `/play/join?roomId=${this.inputBoxRef.current.value}`;
        document.location.href= url;
    }

    render(){
        return(
            <div className= "joinGame">
                <div>
                    <input placeholder= "Enter Room ID" ref= {this.inputBoxRef} />
                    <button onClick= {this.joinRoom.bind(this)} >Join</button>
                </div>

            </div>
        );    
    }
}

export default JoinGame;
