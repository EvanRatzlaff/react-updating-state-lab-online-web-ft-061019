// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }

    onClick = () => {
        const increment = this.state.timesClicked + 1
        this.setState({
            timesClicked: increment
        })
    }

    render() {
        return(
            <button onClick={this.onClick}>
                <label>{this.state.timesClicked}</label>
            </button>
        )
    }
}