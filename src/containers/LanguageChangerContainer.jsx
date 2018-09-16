import React, { Component } from 'react';
import { connect } from 'react-redux'
import LanguageChangerComponent from '../components/LanguageChangerComponent'
import {changeLang} from '../redux/actions'

class LanguageChangerContainer extends Component {
    constructor(){
        super()
        this.languages = [
            {display: 'TR', value: 'TR'},
            {display: 'EN', value: 'EN'},
        ]
    }
    onChangeLang(lang){
        const {onchangelanguage} = this.props
        onchangelanguage(lang)
    }
    render() {
        const {activeLanguage} = this.props
        return (
            <LanguageChangerComponent >
                {this.languages.map(lang => {
                    return {
                        display: lang.display,
                        value: lang.value,
                        isActive: activeLanguage === lang.value,
                        onClick: () => this.onChangeLang(lang.value)
                    }
                })
                }
            </LanguageChangerComponent>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onchangelanguage: (lang) => dispatch(changeLang(lang))
})
const mapStateToProps = (state) => ({
    activeLanguage: state.main.lang.value
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChangerContainer);