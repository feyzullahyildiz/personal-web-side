import React, { Component } from 'react';
import './background.css'
class Background extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg" />
                <div className="bg2" />
            </React.Fragment>
        );
    }
}

export {Background};