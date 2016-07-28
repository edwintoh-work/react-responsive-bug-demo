import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';

const bigStyle = {
  width: '1400px',
  height: '500px',
  background: 'blue',
  color: 'white',
};

const smallStyle = {
  width: '200px',
  height: '200px',
  background: 'blue',
  color: 'white',
};

ReactDOM.render(
  <div>
    <MediaQuery minWidth="1000px" values={{ displayWidth: 1600 }}>
      <div style={bigStyle}>I am big</div>
    </MediaQuery>
    <MediaQuery maxWidth="1000px" values={{ displayWidth: 200 }}>
      <div style={smallStyle}>I am small</div>
    </MediaQuery>
  </div>,
  document.getElementById('root')
);
