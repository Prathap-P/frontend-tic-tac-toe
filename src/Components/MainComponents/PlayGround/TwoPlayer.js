import React, {Component} from 'react';
import '../../../css/TwoPlayer.css'
import {api} from './SocketInterface/APIInterface.js';
import GameBoard from './GameBoard.js';
import {hasAnybodyWon} from './Algorithm.js';

const createTwoPlayerMatch= (AbstractComponent)=> {

    return (class TwoPlayer extends Component{
        constructor(props){
            super(props);
            this.props= props;
            this.state= {
                myTurn: (this.props.symbol === "X") ? true : false 
            };
            this.gameBoardRef= React.createRef();
        }

        changeToOppTurn(boxNum){

            this.setState((prevState) => {
                return {myTurn: false}
            },() => {
                this.checkWinner();
                api.emitEvent(this.socketObj, "canMove", [this.props.roomId, boxNum]); 
            })
        }

        changeToMyTurn= (boxNum) => {
            let getOppoSymbol= ()=> (this.props.symbol === "X") ? "O" : "X";
            this.gameBoardRef.current.querySelectorAll(".Box")[boxNum].innerText= getOppoSymbol();
            
            if(this.checkWinner())
                return;

            this.setState({
                myTurn: true
            });
        }

        checkWinner(){
            this.boxesArr= Array.from(this.gameBoardRef.current.querySelectorAll(".Box"));
            let winner= hasAnybodyWon(this.boxesArr);
            
            if(winner === null)
                return false;

            this.setState({
                winner
            });
            return true;
        }

        componentDidMount(){
            this.socketObj= api.createSocket();
            api.joinRoom(this.socketObj, this.props.roomId)
            api.addListener(this.socketObj, "canMove", this.changeToMyTurn.bind(this))
        }

        render(){
            let gameBoardProps= {
                ref: this.gameBoardRef,
                turnOver: this.changeToOppTurn.bind(this),
                symbol: this.props.symbol,
                myTurn: this.state.myTurn,
                winner: this.state.winner
            }
            return(
                <div className= "TwoPlayers">
                    
                    {(!this.state.winner) ? (<h2 className= "caption" >{(this.state.myTurn) ? "Your " : "Opponent's "} Turn</h2>) : ""}

                    <div className= "roomDetails">Room ID: {this.props.roomId}</div>
                    <AbstractComponent {...gameBoardProps}/>
                </div>
            );    
        }
    })

}

const TwoPlayer= createTwoPlayerMatch(GameBoard);

export default TwoPlayer;
