import React, { Component } from 'react'
import Question from './Question'

class Test extends Component {

    constructor() {

        super()

        this.state = {
            contador: 1,
            respuestas: [],
            solucion: ['a', 'b', 'c', 'c', 'c', 'a', 'c', 'b']
        }
    }
    Auntacont = (e) => {
        let cont = this.state.contador
        this.setState({
            contador: cont++
        })
    }
    Diminuircont = (e) => {
        let cont = this.state.contador
        this.setState({
            contador: cont--
        })
    }
    render() {

        return (
            <React.StrictMode>
                <main>
                    <Question cont={this.state.contador}/>
                </main>
            </React.StrictMode>
        )
    }
}

export default Test
