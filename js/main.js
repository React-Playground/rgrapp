import React from 'react';
import API from './API.js';

export default class Hello extends React.Component {
  componentWillMount() {

  }
  componentDidMount() {
    API.fetchLinks();

  }
  render() {
    return (
      <div>
        <h3>Links</h3>
        <ul>
          <li>Link...</li>
          <li>Link...</li>
          <li>Link...</li>
        </ul>
      </div>
    );
  }
}
