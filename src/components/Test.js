import React, { Component } from 'react'
import Question from './Question'
import Preguntas from './Pregutas'

class Test extends Component {

    constructor(props) {

        super(props)

        this.state = {
            contador: 1,
            respuestas: [],
            solucion: ['a', 'b', 'c', 'c', 'c', 'a', 'c', 'b']
        }
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

        return (
            <React.StrictMode>
                <main>
                    <Question cont={this.state.contador} />
                    <div className="progress">
                        <progress id="cargar" max="8" value={this.state.contador}></progress>
                    </div>
                    <Preguntas cont={this.state.contador} ant={this.Diminuircont} sig={this.Aumentacont}/>
                </main>
            </React.StrictMode>
        )
    }
}

export default Test
