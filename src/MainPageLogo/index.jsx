import React, { Component } from 'react';
import './mainpagelogo.css'
import {changePage} from '../redux/actions'
import {connect} from 'react-redux'
import logoActive from './logo-active.png'
import logoPassive from './logo-passive.png'
import {keys} from '../text'

class MainPageLogo extends Component {
    render() {
        const {changepage, page} = this.props
        let activeClass = null
        if(page === 'MAIN'){
            activeClass = 'active'
        }
        return (
            <div onMouseEnter={changepage} className={`fy-main-logo-container ${activeClass}`}>
                <img className="fy-logo-passive" src={logoPassive} alt={keys.altValue}/>
                <img className="fy-logo-active" src={logoActive} alt={keys.altValue}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    changepage: () => dispatch(changePage('MAIN'))
})
const mapStateToProps = (state) => ({
    page: state.main.page
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPageLogo);