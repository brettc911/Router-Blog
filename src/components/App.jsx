import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <section className='home'>
          <div className='overlay'>
            <h1>Welcome to <span>Forggy Blog!</span></h1>
          </div>
      </section>
    );
  }
}

export default App;
