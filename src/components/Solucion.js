import React, { Component } from 'react'
let clase = 'error';
class Solucion extends Component {

    render() {
        if (this.props.sol === '1') {
            if (this.props.s[0] === this.props.r[0]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 1. a) En la boca
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '2') {
            if (this.props.s[1] === this.props.r[1]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 2.  b)	El esófago
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '3') {
            if (this.props.s[2] === this.props.r[2]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 3. c)	Intestino delgado
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '4') {
            if (this.props.s[3] === this.props.r[3]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 4. c) Intestino grueso
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '5') {
            if (this.props.s[4] === this.props.r[4]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 5. c) Nacen, crecen, se reproducen y mueren
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '6') {
            if (this.props.s[5] === this.props.r[5]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 6. a)	Raiz
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '7') {
            if (this.props.s[6] === this.props.r[6]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 7. c)	Flores, fruto, tallo, hojas y raíz
                </div>
            );
        }
        clase = 'error';
        if (this.props.sol === '8') {
            if (this.props.s[7] === this.props.r[7]) {
                clase = 'bien'
            }
            return (
                <div className={clase}>
                    Respuesta correcta: 8. b)	El tronco
                </div>
            );
        }

    }
}

export default Solucion;