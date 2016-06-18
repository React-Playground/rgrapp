import ServerActions from '../actions/serverActions.js';
const API = {
  fetchLinks() {
    fetch('data/links', {method: 'GET'}).then(resp => {
      return resp.json()
    }).then(resp => {
      console.log(resp);
      ServerActions.receiveLinks(resp);
    });
  }
}

export default API
