import React, { Component } from 'react'

class Itemquest extends Component {

    render() {
        let clase = "";

        
        if (parseInt( this.props.value,10) === this.props.cont) {
            clase = "activo";
        }
        else {
            clase = "noacti";
        }

        return (
            <div className={clase}>{this.props.value}</div>
        )
    }
}

export default Itemquest
