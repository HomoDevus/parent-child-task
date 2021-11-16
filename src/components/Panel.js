import React, {Component} from 'react';
import PanelText from "./PanelText";

const Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export default class Panel extends Component {
    render() {
        return (
            <div className='panel'>
                <p>Parent</p>
                <PanelText text={Text} />
            </div>
        )
    }
}