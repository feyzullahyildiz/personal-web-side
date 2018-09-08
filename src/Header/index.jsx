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
        const {changepage} = this.props
        
        return (
            <div className="fy-header-container">
                <MainPageLogo/>
                <ul className="fy-header-menu">
                    <li className={this.isActiveClass('BLOG')} onMouseEnter={() => changepage('BLOG')}>Blog</li>
                    <li className={this.isActiveClass('CONTACT')} onMouseEnter={() => changepage('CONTACT')}>İletişim</li>
                    <li className={this.isActiveClass('ABOUT')} onMouseEnter={() => changepage('ABOUT')}>Hakkımda</li>
                </ul>
            </div>
        );
    } 
}
const mapStateToProps = (state) => ({
    page: state.main.page
})
const mapDispatchToProps = (dispatch) => ({
    changepage: (page) => dispatch(changePage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);