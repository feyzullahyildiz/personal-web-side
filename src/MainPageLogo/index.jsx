import React, { Component } from 'react';
import './mainpagelogo.css'
import {changePage} from '../redux/actions'
import {connect} from 'react-redux'
class MainPageLogo extends Component {
    render() {
        const {changepage} = this.props
        return (
            <span onMouseEnter={changepage} className="fy-main-logo-container">
                A.Feyzullah YILDIZ
            </span>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changepage: () => dispatch(changePage('MAIN'))
})
export default connect(undefined, mapDispatchToProps)(MainPageLogo);