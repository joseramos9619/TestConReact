import React, { Component } from 'react'

class Contenido extends Component {

    render() {
        if (this.props.cont === 1) {
            return (
                <p>1. El bolo alimenticio se forma en:<br /><br />
                    a) En la boca <br />
                    b) Esófago<br />
                    c) Estómago
                </p>
            );
        }
        if (this.props.cont === 2) {
            return (
                <p>
                    2.	Es un largo tubo que conduce el bolo alimenticio al estómago:<br /><br />
                    a)	La boca<br />
                    b)	El esófago<br />
                    c)	El estómago
                </p>
            );
        }
        if (this.props.cont === 3) {
            return (
                <p>
                    3.	Los nutrientes son absorbidos por las paredes del __________
                    y pasan a la sangre para ser transportados a diferentes órganos del cuerpo.<br /><br />
                    a)	Esófago<br />
                    b)	Estómago<br />
                    c)	Intestino delgado
                </p>
            );
        }
        if (this.props.cont === 4) {
            return (
                <p>
                    4.	En el __________ reabsorbe el agua de manera que
                    se formen las heces, material semisólido que se evacua a través del ano.<br /><br />
                    a)	Esófago<br />
                    b)	Estómago<br />
                    c) Intestino grueso
                </p>
            );
        }
        if (this.props.cont === 5) {
            return (
                <p>
                    5.	Las plantas son seres que:<br /><br />
                    a)	Nacen y se reproducen <br />
                    b) Nacen y crecen<br />
                    c) Nacen, crecen, se reproducen y mueren
                </p>
            );
        }
        if (this.props.cont === 6) {
            return (
                <p>
                    6.	A través de la	_________ la planta absorbe el agua y las
                    sustancias nutritivas.<br /><br />
                    a)	Raiz<br />
                    b)	Cuello<br />
                    c)	Hojas
                </p>
            );
        }
        if (this.props.cont === 7) {
            return (
                <p>
                    7.	Los órganos de la, planta son las:<br /><br />
                    a)	Flores, fruto, hojas y raíz<br />
                    b)	Flores, tallo, hojas y raíz<br />
                    c)	Flores, fruto, tallo, hojas y raíz
                </p>
            );
        }
        if (this.props.cont === 8) {
            return (
                <p>
                    8.	Es el tallo principal que sirve como eje de la planta.<br /><br />
                    a)	Las yemas.<br />
                    b)	El tronco.<br />
                    c)	Los nudos.
                </p>
            );
        }
    }
}

export default Contenido;