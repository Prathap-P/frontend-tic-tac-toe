import React, {Component} from 'react';
import '../../../css/Box.css'

class Box extends Component{
    constructor(props){
        super(props);
        this.props= props;
        this.state= {};
        this.selfRef= React.createRef();
    }

    occupy(event){
        if(this.state.value !== undefined || this.props.disable || this.selfRef.current.innerText)
            return;

        this.setState((prevState) => {
            return {value: this.props.symbol}
        },
        () => {
            this.props.turnOver(this.props.id);
        });
    }

    render(){
        return(
            <div className= "Box" ref= {this.selfRef} onClick= {this.occupy.bind(this)}>
                {this.state.value}
            </div>
        );    
    }
}

export default Box;
