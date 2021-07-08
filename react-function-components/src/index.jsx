import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = prop => {
  return <button>Click Me, {prop.name}!</button>;
};

const button = <CustomButton name="Billy" />;
const $div = document.querySelector('#root');

ReactDOM.render(button, $div);
