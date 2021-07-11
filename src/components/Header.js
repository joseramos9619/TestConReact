import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: props.user
    }
  }

  render() {
    if (this.props.user === "") {
      return (
        <header>
          <h1>Ingrese para realisar el test</h1>
        </header>
      )
    } else {
      return(

      <header>
        <nav>
          <h2><i className="far fa-user"></i> {this.props.user}</h2>
          <i className="fas fa-sign-out-alt salir"></i>
        </nav>
      </header>
      )
    }
  }
}

export default Header
