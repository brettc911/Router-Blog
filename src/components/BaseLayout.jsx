import React, { Component } from 'react';
import '../style/App.css';
import logo from '../style/frog2.png'

// Import Router
import { Link } from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    return (
      <div className='main-contaier'>
        <header className='header'>
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <Link className='link' to='/'>FroggyBlog</Link>
            <Link to='/create'>Create Post</Link>
            <Link to='/list'>Show All Posts</Link>
          </nav>
          <div>

          </div>
        </header>
         {this.props.children}
      </div>
    );
  }
}
