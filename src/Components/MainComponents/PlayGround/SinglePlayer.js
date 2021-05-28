import React, {Component} from 'react';
import GameBoard from './GameBoard.js';
import {makeBestMove, hasAnybodyWon} from './Algorithm.js';

const createSinglePlayerMatch= (AbstractComponent)=> {

    return (class SinglePlayer extends Component{
        constructor(props){
            super(props);
            this.props= props;
            this.state= {};
            this.gameBoardRef= React.createRef();
        }

        computerTurn(){
            this.boxesArr= Array.from(this.gameBoardRef.current.querySelectorAll(".Box"));
            this.checkForWinner(this.boxesArr);
            
            let [x, y]= makeBestMove(this.boxesArr);
            let boxIndex= this.calcIndexFromCoOrdinates(x, y);
            this.boxesNodeList[boxIndex].innerText= "O";

            this.checkForWinner(this.boxesArr);
        }

        checkForWinner(arr){
            let winner= hasAnybodyWon(arr);
            if(winner !== null){
                this.setState({
                    winner
                });
            }
        }

        calcIndexFromCoOrdinates(x, y){
            return ((3 * x) + y);
        }

        componentDidMount(){
            this.boxesNodeList= this.gameBoardRef.current.querySelectorAll(".Box");
            console.log(this.gameBoardRef)
        }

        render(){
            let gameBoardProps= {
                ref: this.gameBoardRef,
                turnOver: this.computerTurn.bind(this),
                symbol: 'X',
                winner: this.state.winner
            }
            return(
                <AbstractComponent {...gameBoardProps}/>
            );    
        }
    })

}

const SinglePlayer= createSinglePlayerMatch(GameBoard);

export default SinglePlayer;
