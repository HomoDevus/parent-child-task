import React from 'react';
import ReactDOM from 'react-dom';
import PanelText from './PanelText.jsx';

export const RenderChild = (text) => {
    ReactDOM.render(
        <React.StrictMode>
            <PanelText text={text} />
        </React.StrictMode>,
        document.getElementById('parent')
    );
}