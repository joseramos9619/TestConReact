import React, { Component } from 'react'
import Login from './components/loging';
import Header from './components/Header'
import Test from './components/Test';

class App extends Component {

    constructor() {

        super()

        this.state = {
            usuario: "",
            
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
                    <Test salir = {this.handreDatos}/>
                </React.StrictMode>
            )
        }
    }
}

export default App
