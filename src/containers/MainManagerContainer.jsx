import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MainManagerComponent from '../components/MainManagerComponent';
import {connect} from 'react-redux'

class MainManagerContainer extends Component {
    shouldComponentUpdate(){
        this._oldPage = this.props.page
        return true
    }
    render() {
        const {page, nextAnimationDirection, lang} = this.props
        if(!lang){
            return null
        }
        return (
            <div className="fy-main-container">
                <React.Fragment>
                    <MainManagerComponent open={page === 'MAIN'} hideAnim={this._oldPage === 'MAIN'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>{lang['pages']['MAIN']}</p>
                        </React.Fragment>
                    </MainManagerComponent>

                    <MainManagerComponent open={page === 'BLOG'} hideAnim={this._oldPage === 'BLOG'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>{lang['pages']['BLOG']}</p>
                        </React.Fragment>
                    </MainManagerComponent>

                    <MainManagerComponent open={page === 'CONTACT'} hideAnim={this._oldPage === 'CONTACT'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>{lang['pages']['CONTACT']}</p>
                        </React.Fragment>
                    </MainManagerComponent>
                    
                    <MainManagerComponent open={page === 'ABOUT'} hideAnim={this._oldPage === 'ABOUT'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>{lang['pages']['ABOUT']}</p>
                        </React.Fragment>
                    </MainManagerComponent>
                </React.Fragment>
            </div>
        );
    }
}
MainManagerContainer.propTypes ={
    page: PropTypes.oneOf(['MAIN', 'ABOUT', 'CONTACT', 'BLOG']),
    nextAnimationDirection: PropTypes.bool,
    
}
const mapStoreToProps = (store) => ({
    page: store.main.page,
    nextAnimationDirection: store.main.nextAnimationDirection,
    lang: store.main.lang
  })
export default connect(mapStoreToProps)(MainManagerContainer);