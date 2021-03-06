import React from 'react';
import API from './API.js';
import LinkStore from '../js/stores/LinkStore.js';

let _getAppState = () => {
  return { links: LinkStore.getAll()};
};

class Main extends React.Component {
  static propTypes = {
    limit: React.PropTypes.number
  }

  static defaultProps = {
    limit: 4
  }

  state = _getAppState();
  componentWillMount() {

  }
  componentDidMount() {
    API.fetchLinks();
    LinkStore.on('change', this.onChange)

  }

  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange);
  }

  onChange = () => {
    console.log(this);
    this.setState(_getAppState())
  }
  render() {
    let content = this.state.links.slice(0, this.props.limit).map(link => {
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

export default Main;
