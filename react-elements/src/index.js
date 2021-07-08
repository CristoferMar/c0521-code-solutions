import React from 'react';
import ReactDom from 'react-dom';

const $div = document.querySelector('#root');
const $h1 = React.createElement('h1', null, 'Hello, React!');
console.log('This is a react element:', $h1);

ReactDom.render($h1, $div);
