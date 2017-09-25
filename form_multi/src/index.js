import React from 'react';
import ReactDOM from 'react-dom';
import MultiForm from './MultiForm.js'
import registerServiceWorker from './registerServiceWorker';
const st = {
  textAlign: 'left',
  padding: '10px',
};

ReactDOM.render(
  <div style={st}>
    <MultiForm />
  </div>,
  document.getElementById('root'));

registerServiceWorker();
