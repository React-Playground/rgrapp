import React from 'react';
import API from './API.js';
import LinkStore from '../js/stores/LinkStore.js';

let _getAppState = () => {
  return { links: LinkStore.getAll()};
};

export default class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {

  }
  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange)

  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange() {
    console.log(this);
    this.setState(_getAppState())
  }
  render() {
    let content = this.state.links.map(link => {
      return <li key={link._id}> <a href={link.url}>{link.title}</a></li>
    })
    return (
      <div>
        <h3>Links</h3>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}
