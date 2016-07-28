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

const deviceWidth = 1600;

app.get('/', (req, res) => {
  res.send(
    renderToString(
      <div>
        <div>Device Test!</div>
        <MediaQuery minDeviceWidth={1224} values={{deviceWidth: deviceWidth}}>
          <div>You are a desktop or laptop</div>
          <MediaQuery minDeviceWidth={1824} values={{deviceWidth: deviceWidth}}>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery maxWidth={1224} values={{deviceWidth: deviceWidth}}>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224} values={{deviceWidth: deviceWidth}}>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery orientation='portrait' values={{deviceWidth: deviceWidth}}>
          <div>You are portrait</div>
        </MediaQuery>
         <MediaQuery orientation='landscape' values={{deviceWidth: deviceWidth}}>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery minResolution='2dppx' values={{deviceWidth: deviceWidth}}>
          <div>You are retina</div>
        </MediaQuery>
      </div>));
});

app.listen(PORT, (err) => {
  console.log(`Listening on port ${PORT}`);
});
