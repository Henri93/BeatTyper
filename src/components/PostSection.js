import React from 'react'
import { Post } from './Post'
import { PostForm } from './PostForm'

export class PostSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }

    this.handlePostSubmit = this.handlePostSubmit.bind(this)
    this.handleVoteChange = this.handleVoteChange.bind(this)
  }

  handlePostSubmit(event, name, postContent) {
    //create a new post
    this.setState(prevState => ({
      posts: [
        ...prevState.posts,
        {
          name: name,
          postContent: postContent,
          key:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15),
          voteCount: 0,
          depth: 0
        }
      ]
    }))
  }

  handleVoteChange(postId, vote) {
    console.log('vote changed to ' + vote + ' for ' + postId)
  }

  render() {
    return (
      <div className='d-flex align-items-center p-3 my-3 bg-purple rounded box-shadow'>
        <div className='container'>
          <div className='row justify-content-center'>
            <h4 className='mb-0'>New Post</h4>
          </div>
          <div>
            <PostForm onPostSubmit={this.handlePostSubmit} />

            <div className='posts'>
              {this.state.posts.map(post => (
                <Post
                  key={post.key}
                  id={post.key}
                  depth={post.depth}
                  name={post.name}
                  postContent={post.postContent}
                  voteCount={post.voteCount}
                  onVoteChange={this.handleVoteChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
