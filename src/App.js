import React from 'react';
import './App.css';
import MainNav from './components/MainNav/MainNav';
import Main from './containers/Main/Main';


class App extends React.Component{
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    this.state = {
      token: token,
      loggedIn: token ? true : false
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g, q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      this.state.loggedIn?
        <div className="App">
          <MainNav />
          <Main token={this.state.token}/>
        </div>
    :
      <a href='http://localhost:8888' > Login to Spotify </a>
    );
  }
}

export default App;
