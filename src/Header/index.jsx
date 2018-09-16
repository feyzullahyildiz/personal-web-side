import React, { Component } from 'react';
import MainPageLogo from '../MainPageLogo';
import {changePage} from '../redux/actions'
import { connect } from 'react-redux';

class Header extends Component {
    isActiveClass(_page){
        const {page} = this.props
        return _page === page ? 'active':''
    }
    render() {
        const {changepage, headers} = this.props
        
        return (
            <div className="fy-header-container">
                <MainPageLogo/>
                <ul className="fy-header-menu">
                    <li className={this.isActiveClass('BLOG')} onMouseEnter={() => changepage('BLOG')}>{headers['BLOG']}</li>
                    <li className={this.isActiveClass('CONTACT')} onMouseEnter={() => changepage('CONTACT')}>{headers['CONTACT']}</li>
                    <li className={this.isActiveClass('ABOUT')} onMouseEnter={() => changepage('ABOUT')}>{headers['ABOUT']}</li>
                </ul>
            </div>
        );
    } 
}
const mapStateToProps = (state) => ({
    page: state.main.page,
    headers: state.main.lang.headers,
})
const mapDispatchToProps = (dispatch) => ({
    changepage: (page) => dispatch(changePage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);