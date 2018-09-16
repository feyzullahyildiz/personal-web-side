import React, { Component } from 'react';

class MainManagerComponent extends Component {
    render() {
        const {children, open, nextAnimationDirection, hideAnim} = this.props
        let isHidden = ''
        if(!open){
            isHidden = 'hide'
            if(hideAnim){
            }else{
                if(!this._isLeft){
                    this._isLeft = nextAnimationDirection ? 'left' : 'right' 
                }
            }
        }
        return (
            <div className={`fy-card ${isHidden}`}>
                <div className="fy-card-header">
                    <img className="avatar" alt="a.feyzullah.yildiz" src="https://avatars1.githubusercontent.com/u/28671359?s=400&u=045843a1da9e3b65d6bc1ede3243bee0c3d65cc6&v=4"/>
                </div>
                <div className="fy-card-body">
                    {children}
                </div>
            </div>
        );
    }
}
export default MainManagerComponent;