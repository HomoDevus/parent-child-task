import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel.jsx';
import {RenderChild} from "../childApp/index.jsx";

const Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

ReactDOM.render(
    <React.StrictMode>
        <Panel/>
    </React.StrictMode>,
    document.getElementById('root')
);

RenderChild(Text);