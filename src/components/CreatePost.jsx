import React, { Component } from 'react';
import '../style/App.css';

import { NavLink, Link } from 'react-router-dom';

export default class CreatePost extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      title: "",
      blog: "",
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBlogChange = this.handleBlogChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleFormSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    let formSubmit = JSON.stringify(this.state)
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/`, {
     method: `POST`,
     body: formSubmit,
     headers: {
       'Accept': `application/json`,
       'Content-Type': `application/json`
     }
   })
   .then(res => console.log(res, 'Yes!'))
   .then(this.props.history.push('/'))
   .catch(err => console.log(err, 'Lame!'))
   this.setState({
     name: "",
     title: "",
     blog: "",
   });

  }

  handleNameChange = e => {
    this.setState({name: e.target.value})
  }
  handleTitleChange = e => {
    this.setState({title: e.target.value})
  }
  handleBlogChange = e => {
    this.setState({blog: e.target.value})
  }

  render() {
    return (
      <section className='create-post'>
        <form>
          <label>Author's Name</label>
          <input type="text" onChange={this.handleNameChange} placeholder="Name"/>
          <label>Title</label>
          <input type="text" name="" onChange={this.handleBlogChange}  placeholder="Title"/>
          <label>Write your blog!</label>
          <textarea name="" rows="8" cols="80" onChange={this.handleTitleChange} placeholder="Write away!"></textarea>
          <button onClick={this.handleFormSubmit}>Submit</button>


        </form>
      </section>
    );
  }
}
