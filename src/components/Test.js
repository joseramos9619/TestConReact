import React, { Component } from 'react'
import Question from './Question'
import Preguntas from './Pregutas'

let respuestas = ['', '', '', '', '', '', '', ''];

class Test extends Component {


    constructor(props) {

        super(props)

        this.state = {
            contador: 1,
            solucion: ['a', 'b', 'c', 'c', 'c', 'a', 'c', 'b']
        }
    }

    guadar = (cont, val) => {
        respuestas[cont] = val
    }

    Aumentacont = () => {
        if (this.state.contador < 8) {
            this.setState({
                contador: this.state.contador + 1
            });
        }
    }
    Diminuircont = () => {
        if (this.state.contador > 1) {
            this.setState({
                contador: this.state.contador - 1
            });
        }
    }
    render() {
        let r = 0;
        console.log("r" + r)
        for (let i = 0; i < respuestas.length; i + 1) {
            let aux = 0;
            if (respuestas[i] !== "") {
                aux++;
            }
            r = aux
        }

        if (r < 8) {
            console.log(respuestas)
            return (
                <React.StrictMode>
                    <main>
                        <Question cont={this.state.contador} />
                        <div className="progress">
                            <progress id="cargar" max="8" value={this.state.contador}></progress>
                        </div>
                        <Preguntas guar={this.guadar} cont={this.state.contador} sol={this.state.respuestas} ant={this.Diminuircont} sig={this.Aumentacont} />
                    </main>
                </React.StrictMode>
            )
        }
        else {
            console.log(respuestas)
            return (
                <div className="resultado">
                    <h2>Resultados</h2>
                    <span id="rtest"></span>
                    <div id="res-1">
                        Respuesta correcta: 1. a) En la boca
                    </div>
                    <div id="res-2">
                        Respuesta correcta: 2.  b)	El esófago
                    </div>
                    <div id="res-3">
                        Respuesta correcta: 3. c)	Intestino delgado
                    </div>
                    <div id="res-4">
                        Respuesta correcta: 4. c) Intestino grueso
                    </div>
                    <div id="res-5">
                        Respuesta correcta: 5. c) Nacen, crecen, se reproducen y mueren
                    </div>
                    <div id="res-6">
                        Respuesta correcta: 6. a)	Raiz
                    </div>
                    <div id="res-7">
                        Respuesta correcta: 7. c)	Flores, fruto, tallo, hojas y raíz
                    </div>
                    <div id="res-8">
                        Respuesta correcta: 8. b)	El tronco
                    </div>
                    <button id="salir-2">Salir</button>
                </div>
            )
        }
    }
}

export default Test
