import React, { Component } from 'react';
import '../style/App.css';

import { NavLink, Link } from 'react-router-dom';

export default class PostList extends Component {
  constructor(props){
    super(props)

    this.state = {
      blogs: [],
    }

  }
  componentDidMount() {
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger`)
    .then(res => res.json())
    .then(data => this.setState({blogs: data}))
    .catch(err => console.log("Error fetching : ", err))
  }


  render() {
    console.log(this.state.blogs);

    let match = this.props.match
    let blogPosts = this.state.blogs.map(blog => {
      return (
        <li key={blog._id}>
            <Link to={`/list/${blog._id}`}><h2>{blog.title}</h2></Link>
        </li>
      )
    })

    return (
      <section className='post-list'>
        <h1>Blog Posts:</h1>
        <ul>
          {blogPosts}
        </ul>
      </section>
    );
  }
}
