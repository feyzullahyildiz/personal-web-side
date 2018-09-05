import React, { Component } from 'react';
import { MainPageLogo } from '../MainPageLogo';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="fy-header-container">
                <MainPageLogo/>
                <ul className="fy-header-menu">
                    <li>Blog</li>
                    <li>İletişim</li>
                    <li>Hakkımda</li>
                </ul>
            </div>
        );
    }
}

export {Header};