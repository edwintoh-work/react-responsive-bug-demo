const express = require('express');

import React from 'react';
import { renderToString } from 'react-dom/server';
import MediaQuery from 'react-responsive';

const app = express();
const PORT = process.env.PORT || 8080;

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

const deviceWidth = 200;
const width = 200;

app.get('/', (req, res) => {
  res.send(
    renderToString(
      <div>
        <MediaQuery minDeviceWidth={1224} values={{deviceWidth}}>
          <div style={bigStyle}>I am big</div>
        </MediaQuery>
        <MediaQuery maxWidth={1000} values={{ width }}>
          <div style={smallStyle}>I am small</div>
        </MediaQuery>
      </div>));
});

app.listen(PORT, (err) => {
  console.log(`Listening on port ${PORT}`);
});
