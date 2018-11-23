import React, { Component } from 'react';
import FullCommentComponent from './components/FullCommentComponent';

class App extends Component {

  state = {
    user: {
      firstName: 'Lisa',
      lastName: 'Simpson',
      avatarUrl: 'https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  }

  render() {
    return (
      <div className="App">
       <FullCommentComponent user={this.state.user}/> 
      </div>
    );
  }
}

export default App;
