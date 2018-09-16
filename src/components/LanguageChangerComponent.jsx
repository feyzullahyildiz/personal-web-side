import React, { Component } from 'react';
import PropTypes from 'prop-types'
class LanguageChangerComponent extends Component {
    render() {
        const {children} = this.props
        return (
            <div className="fy-language-container">
                {children.map(lang => {
                    let activeClass = lang.isActive ? ' active' : ''
                    return <span className={`language${activeClass}`} key={lang.display} onClick={lang.onClick}>{lang.display}</span>
                })}
            </div>
        );
    }
}

LanguageChangerComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        isActive: PropTypes.bool,
        value: PropTypes.string,
        display: PropTypes.string,
        onClick: PropTypes.func,
    })).isRequired
}

export default LanguageChangerComponent;