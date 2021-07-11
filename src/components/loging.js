import React, { Component } from 'react'

class loging extends Component {

    constructor() {
        super()
        this.nombre = React.createRef()
        this.apellido = React.createRef()
    }

    enviardatos = (e) => {

        if (this.nombre.current.value !== "" && this.apellido.current.value !== "") {
            e.preventDefault()
            let user = `${this.nombre.current.value} ${this.apellido.current.value}`
            this.props.nombre(user)
        }
        else {
            window.alert("Complete los campos para ingresar")
        }
    }

    render() {
        return (
            <div className="login">
                <div className="login-header">Datos requeridos</div>
                <div className="login-form">
                    <input type="text" placeholder="Nombres" ref={this.nombre} />
                    <input type="text" placeholder="Apellidos" ref={this.apellido} />
                </div>
                <div>
                    <button onClick={this.enviardatos}>Iniciar</button>
                </div>
            </div>
        )
    }
}

export default loging
