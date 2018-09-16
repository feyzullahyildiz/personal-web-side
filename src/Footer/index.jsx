import React, { Component } from 'react';
import LanguageChangerContainer from '../containers/LanguageChangerContainer'
import {connect} from 'react-redux'
class Footer extends Component {
    render() {
        const {links} = this.props
        return (
            <div className="fy-footer-container">
                <span />
                <ul>
                    <li><a href={links.github} target="_blank">GitHub</a></li>
                    <li><a href={links.medium} target="_blank">Medium</a></li>
                    <li><a href={links.linkedin} target="_blank">Linkedin</a></li>
                    <li><a href={links.twitter} target="_blank">Twitter</a></li>
                </ul>
                <LanguageChangerContainer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    links: state.main.lang.links
})
export default connect(mapStateToProps)(Footer);