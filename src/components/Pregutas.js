import React, { Component } from 'react'
import Contenido from './Contenido';
class Preguntas extends Component {

    constructor(props) {
        super(props)
        this.solucion = React.createRef()
    }

    fin = () => {
        if (this.solucion.current.value !== "") {
            console.log(this.props.cont-1)
            this.props.guar(this.props.cont-1,this.solucion.current.value);
            this.props.sig();
            this.solucion.current.value="";
        }
        else {
            alert("por favor responder la pregunta")
        }
    }

    render() {
        let boton = "Sig"
        let cont = this.props.cont
        if (this.props.cont === 8) {
            boton = "Fin"
        }

        return (
            <div className="responder">
                <div>
                    <Contenido cont={cont} />
                    <input type="text" placeholder="Solución" ref={this.solucion} />
                </div>
                <span className="botones">
                    <button onClick={this.props.ant}>Ant</button>
                    <span className="contador">{cont}/8</span>
                    <button onClick={this.fin}>{boton}</button>
                </span>
            </div>
        );
    }
}

export default Preguntas;