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
            disable: (!!this.props.winner) | (!this.props.myTurn)
        };

        let announceResult= ()=> {
            if(this.props.winner === this.props.symbol)
                return "You Won";
            
            else if(this.props.winner === "Tie")
                return  "Tied";
            
            return "Opponent Won";
        };

        return(
            <div className= "GameBoard" ref= {this.props.forwardedRef}>
                {(this.props.winner) ? (<h2 className= "result" >{announceResult()}</h2>) : ""}

                <div className= "board">
                    <div className= "row" id= 'row1'>
                        <Box id= '0' {...boxProps } />
                        <Box id= '1' {...boxProps } />
                        <Box id= '2' {...boxProps }/>
                    </div>

                    <div className= "row" id= 'row2'>
                        <Box id= '3' {...boxProps } />
                        <Box id= '4' {...boxProps } />
                        <Box id= '5' {...boxProps } />
                    </div>
                    
                    <div className= "row" id= 'row3'>
                        <Box id= '6' {...boxProps } />
                        <Box id= '7' {...boxProps } />
                        <Box id= '8' {...boxProps } />
                    </div>
                        
                </div>

            </div>
        );    
    }
}

export default React.forwardRef((props, ref) => 
    <GameBoard forwardedRef= {ref} {...props}/>
);
