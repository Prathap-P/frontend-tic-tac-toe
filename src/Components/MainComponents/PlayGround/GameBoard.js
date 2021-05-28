import React, {Component} from 'react';
import Box from './Box.js';
import {hasAnybodyWon} from './Algorithm.js';
import '../../../css/GameBoard.css'

class GameBoard extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
    }

    render(){
        let boxProps= {
            turnOver: this.props.turnOver,
            symbol: this.props.symbol,
            disable: !!this.props.winner
        }

        return(
            <div className= "GameBoard" ref= {this.props.forwardedRef}>
                {
                    (this.props.winner) ? (<h1>!!{this.props.winner}{(this.props.winner === "tie") ? "" : " Wins" }...</h1>) : ""
                }

                <div className= "row" id= 'row1'>
                    <Box id= '1' {...boxProps } />
                    <Box id= '2' {...boxProps } />
                    <Box id= '3' {...boxProps }/>
                </div>

                <div className= "row" id= 'row2'>
                    <Box id= '4' {...boxProps } />
                    <Box id= '5' {...boxProps } />
                    <Box id= '6' {...boxProps } />
                </div>
                
                <div className= "row" id= 'row3'>
                    <Box id= '7' {...boxProps } />
                    <Box id= '8' {...boxProps } />
                    <Box id= '9' {...boxProps } />
                </div>

            </div>
        );    
    }
}

export default React.forwardRef((props, ref) => 
    <GameBoard forwardedRef= {ref} {...props}/>
);
