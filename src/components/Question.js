import React, { Component } from 'react'
import Itemquest from './Itemquest'

class Question extends Component {

    render() {
        return (
            <div className="preguntas">
                <Itemquest value="1" cont={this.props.cont}/>
                <Itemquest value="2" cont={this.props.cont}/>
                <Itemquest value="3" cont={this.props.cont}/>
                <Itemquest value="4" cont={this.props.cont}/>
                <Itemquest value="5" cont={this.props.cont}/>
                <Itemquest value="6" cont={this.props.cont}/>
                <Itemquest value="7" cont={this.props.cont}/>
                <Itemquest value="8" cont={this.props.cont}/>
            </div>
        )
    }
}

export default Question
