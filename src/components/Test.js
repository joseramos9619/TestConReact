import React, { Component } from 'react'
import Question from './Question'
import Preguntas from './Pregutas'
import Solucion from './Solucion'

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
        if (this.state.contador <= 8) {
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

    salir = () => {
        this.props.salir("")
    }

    render() {
        let r = this.state.contador - 1
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
            let c = 0;
            let nota = 0;
            for (let i = 0; i < 8; i++) {
                if (respuestas[i] === this.state.solucion[i]) {
                    c++;
                }
            }
            if (c > 0) {
                nota = c * 0.625;
            }
            let a = 'reprobado'
            let clase = 'error';
            if (nota > 3) {
                clase = 'bien'
                a = "aprobado"
            }
            return (
                <div className="resultado">
                    <h2>Resultados</h2>
                    <span>{c}/8</span>
                    <span>nota: {nota}</span><span className={clase}> {a}</span>
                    <Solucion sol='1' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='2' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='3' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='4' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='5' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='6' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='7' r={respuestas} s={this.state.solucion} />
                    <Solucion sol='8' r={respuestas} s={this.state.solucion} />
                    <button onClick={this.salir}>Salir</button>
                </div>
            )
        }
    }
}

export default Test
