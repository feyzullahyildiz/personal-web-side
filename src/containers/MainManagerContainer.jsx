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
        const {page, nextAnimationDirection} = this.props
        return (
            <div className="fy-main-container">
                <React.Fragment>
                    <MainManagerComponent open={page === 'MAIN'} hideAnim={this._oldPage === 'MAIN'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>Ana Sayfa</p>
                        </React.Fragment>
                    </MainManagerComponent>

                    <MainManagerComponent open={page === 'BLOG'} hideAnim={this._oldPage === 'BLOG'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>Blog</p>
                        </React.Fragment>
                    </MainManagerComponent>

                    <MainManagerComponent open={page === 'CONTACT'} hideAnim={this._oldPage === 'CONTACT'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>İletişim</p>
                        </React.Fragment>
                    </MainManagerComponent>
                    
                    <MainManagerComponent open={page === 'ABOUT'} hideAnim={this._oldPage === 'ABOUT'} nextAnimationDirection={nextAnimationDirection}>
                        <React.Fragment>
                            <p>Hakkımda </p>
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
    nextAnimationDirection: store.main.nextAnimationDirection
  })
export default connect(mapStoreToProps)(MainManagerContainer);