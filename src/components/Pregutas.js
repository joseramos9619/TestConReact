import React, { Component } from 'react'
import Contenido from './Contenido';
class Preguntas extends Component {

    render() {
        return (
            <div className="responder">
                <div>
                    <Contenido cont = {this.props.cont}/>
                    <input type="text" placeholder="respuesta" />
                </div>
                <span className="botones">
                    <button onClick={this.props.ant}>Ant</button>
                    <span className="contador">{this.props.cont}/8</span>
                    <button onClick={this.props.sig}>Sig</button>
                </span>
            </div>
        );
    }
}

export default Preguntas;