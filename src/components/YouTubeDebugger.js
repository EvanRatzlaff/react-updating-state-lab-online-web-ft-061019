// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    onClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    resButton = () => {
        let newRes = '720p'
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: newRes
                }
            }
        })
    }

    render() {
        return(
            <div>
            <button className="bitrate" onClick={this.onClick}>
                <label>Press Here</label>
            </button>
            <button className="resolution" onClick={this.resButton}>
                <label>Press Here!</label>
            </button>
            </div>
        )
    }

}