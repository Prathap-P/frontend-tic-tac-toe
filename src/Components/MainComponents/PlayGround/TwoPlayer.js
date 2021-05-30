import React, {Component} from 'react';
import socketClient from 'socket.io-client';
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
                this.socketIO.emit("canMove", boxNum); 
            })
        }

        changeToMyTurn= (boxNum) => {
            let getOppoSymbol= ()=> (this.props.symbol === "X") ? "O" : "X";
            this.boxesNodeList= this.gameBoardRef.current.querySelectorAll(".Box")[boxNum].innerText= getOppoSymbol();
            
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

        createSocket(){
            this.socketIO= socketClient("http://127.0.0.1:9000");
            this.socketIO.emit("joinRoom", this.props.roomId);
            this.socketIO.on("canMove", this.changeToMyTurn);
        }

        componentDidMount(){
            this.boxesNodeList= this.gameBoardRef.current.querySelectorAll(".Box");
            this.createSocket();
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
                <>
                    <div>Room ID: {this.props.roomId}</div>
                    <AbstractComponent {...gameBoardProps}/>
                </>
            );    
        }
    })

}

const TwoPlayer= createTwoPlayerMatch(GameBoard);

export default TwoPlayer;
