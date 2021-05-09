import React, { Component } from 'react'
import Login from './components/loging';
import Header from './components/Header'

export class App extends Component {

    constructor() {

        super()

        this.state = {
            usuario: "",
            contador: 1,
            respuestas: [],
            solucion: ['a', 'b', 'c', 'c', 'c', 'a', 'c', 'b']
        }
    }
    handreDatos = (e) => {
        this.setState({
            usuario: e
        })
    }
    render() {
        if (this.state.usuario === "") {
            return (
                <React.StrictMode>
                    <Header user={this.state.usuario} />
                    <Login nombre={this.handreDatos} />
                </React.StrictMode>
            )
        }
        else {
            return (
                <React.StrictMode>
                    <Header user={this.state.usuario} />
                </React.StrictMode>
            )
        }
    }
}

export default App
