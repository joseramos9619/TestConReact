import React, { Component } from 'react'
import Itemquest from './Itemquest'

class Question extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div className="preguntas">
                <Itemquest cont={this.props.cont}/>
            </div>
        )
    }
}

export default Question
