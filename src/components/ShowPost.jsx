import React, { Component } from 'react';
import '../style/App.css';

import { NavLink, Link } from 'react-router-dom';

export default class ShowPost extends Component {
  constructor(props){
    super(props)

    this.state = {
      blog: {},
    }

  }
  componentDidMount(){

    const { id } = this.props.match.params;

    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`)
    .then(res => res.json())
    .then(data => this.setState({blog: data}))
    .catch(err => console.log("Error fetching : ", err))
  }

  render() {
    return (
      <div>
      <h1>Title:</h1>
      <h2>{this.state.blog.title}</h2>
      <h1>Author:</h1>
      <h2>{this.state.blog.author}</h2>
      <h1>Blog:</h1>
      <h2>{this.state.blog.blog}</h2>
        <Link to={`/list`}><button>Back to list</button></Link>
      </div>
    );
  }
}
