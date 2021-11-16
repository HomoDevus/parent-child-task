import React, {Component} from 'react';

export default class PanelText extends Component {
    render() {
        return (
            <div className='panel-text'>
                <p>Child</p>
                <div>{this.props.text}</div>
            </div>
        )
    }
}