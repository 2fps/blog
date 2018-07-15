/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import Content from './components/content/content.js';

let content = (
    <div>
        <Header></Header>
        <Content></Content>
    </div>
);

ReactDOM.render(
    content,
    document.getElementById('root')
);

