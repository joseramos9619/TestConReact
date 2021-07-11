import React, { Component } from 'react'

class Itemquest extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        let item = ""
        for (let i = 1; i <= 8; i++) {
            if (i === this.props.cont) {
                item += `<div style="background-color: rgb(92, 204, 92)">${i}</div>`
            }
            else {
                item += `<div>${i}</div>`
            }
        
        }
        console.log(item)
        return (
            <React.StrictMode>
                
            </React.StrictMode>
        )
    }
}

export default Itemquest
