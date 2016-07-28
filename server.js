const express = require('express');
const device = require('express-device');

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

app.use(device.capture());

var deviceWidth = 1600;

app.get('/', (req, res) => {
  console.log(req.device.type);

  switch(req.device.type) {
    case 'desktop':
      deviceWidth = 1024;
      break;
    case 'tablet':
      deviceWidth = 760;
      break;
    case 'phone':
      deviceWidth = 320;
      break;
  }

  res.send(
    renderToString(
      <div>
        <div>Device Test!</div>
        <MediaQuery minDeviceWidth={1024} values={{deviceWidth: deviceWidth}}>
          <div>You are a desktop or laptop</div>
        </MediaQuery>
        <MediaQuery maxWidth={1023} values={{deviceWidth: deviceWidth}}>
          <div>You are a tablet</div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={480} values={{deviceWidth: deviceWidth}}>
          <div>You are a mobile phone</div>
        </MediaQuery>
      </div>));
});

app.listen(PORT, (err) => {
  console.log(`Listening on port ${PORT}`);
});
