import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="fy-footer-container">
                <ul>
                    <li>GitHub</li>
                    <li>Medium</li>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                </ul>
            </div>
        );
    }
}

export {Footer};