import React, {Component} from 'react';
import GameBoard from './GameBoard.js';
import {makeBestMove, hasAnybodyWon, calcIndexFromCoOrdinates} from './Algorithm.js';

const createSinglePlayerMatch= (AbstractComponent)=> {

    return (class SinglePlayer extends Component{
        constructor(props){
            super(props);
            this.props= props;
            this.state= {
                myTurn: true
            };
            this.gameBoardRef= React.createRef();
        }

        computerTurn(boxId){
            this.boxesArr= Array.from(this.gameBoardRef.current.querySelectorAll(".Box"));
            if(this.checkForWinner(this.boxesArr))
                return;
            
            let [x, y]= makeBestMove(this.boxesArr);
            let boxIndex= calcIndexFromCoOrdinates(x, y);
            this.boxesNodeList[boxIndex].innerText= "O";

            this.checkForWinner(this.boxesArr);
        }

        checkForWinner(arr){
            let Winner= hasAnybodyWon(arr);

            if(Winner === null)
                return false;

            this.setState((prevState) => {
                return{
                    winner: Winner,
                    myTurn: !this.state.myTurn
                }
            });
            return true;
        }

        componentDidMount(){
            this.boxesNodeList= this.gameBoardRef.current.querySelectorAll(".Box");
        }

        render(){
            let gameBoardProps= {
                ref: this.gameBoardRef,
                turnOver: this.computerTurn.bind(this),
                symbol: 'X',
                myTurn: this.state.myTurn,
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
