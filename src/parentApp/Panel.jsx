import React, {Component} from 'react';
import '../App.css';

export default class Panel extends Component {
    render() {
        return (
            <div className='panel'>
                <p>Parent</p>
                <div id='parent' />
            </div>
        )
    }
}