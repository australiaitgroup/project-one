import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 统一交给 webpack 管理
// maintainable
import './main.css';

ReactDOM.render((<App />), document.querySelector('#app'));
