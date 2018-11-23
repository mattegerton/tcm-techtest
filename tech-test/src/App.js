import React, { Component } from 'react';
import './App.css';
import CommentsComponent from './components/CommentsComponent';

class App extends Component {

  state = {
    user: {
      firstName: 'Ronald',
      lastName: 'McDonald',
      userUrl: 'https://images.pexels.com/photos/1089038/pexels-photo-1089038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  }

  render() {
    return (
      <div className="App">
        <CommentsComponent user={this.state.user}/>
      </div>
    );
  }
}

export default App;
