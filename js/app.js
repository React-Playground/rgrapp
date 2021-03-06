import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import Main from './main.js';

ReactDOM.render(<Main limit={3} />, document.getElementById('react'));

console.log(
  Relay.QL`
   query Test {
      links {
        title
      }
    }
  `, 'hello'
);
