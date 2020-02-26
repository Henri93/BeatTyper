import React from 'react'
import { Voter } from './Voter'
import { PostForm } from './PostForm'

export class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showReplyForm: false,
      depth: this.props.depth,
      replies: []
    }

    this.handleReplySubmit = this.handleReplySubmit.bind(this)
    this.handleVoteChange = this.handleVoteChange.bind(this)
    this.handleReplyVoteChange = this.handleReplyVoteChange.bind(this)
    this.handleReply = this.handleReply.bind(this)
    this.renderReplyForm = this.renderReplyForm.bind(this)
  }

  handleVoteChange(vote) {
    this.props.onVoteChange(this.props.id, vote)
  }

  handleReplyVoteChange(vote) {
    console.log('vote changed to ' + vote + ' for ' + this.props.id)
  }

  handleReplySubmit(event, name, postContent) {
    if (this.state.depth + 1 >= 3) {
      alert('Cannot go past 3 levels of depth!')
    } else {
      //create a new reply
      this.setState(prevState => ({
        replies: [
          ...prevState.replies,
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
            depth: prevState.depth + 1
          }
        ]
      }))
      this.setState({ showReplyForm: false })
    }
  }

  handleReply() {
    const { showReplyForm } = this.state
    this.setState({
      showReplyForm: !showReplyForm
    })
  }

  renderReplyForm() {
    if (this.state.showReplyForm) {
      return <PostForm onPostSubmit={this.handleReplySubmit} />
    } else {
      return null
    }
  }

  render() {
    return (
      <div
        className={
          'post' + this.state.depth + ' my-3 p-3 bg-white rounded box-shadow'
        }>
        <div className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <strong className='text-gray-dark'>{this.props.name}</strong>
            <Voter
              onVoteChange={this.handleVoteChange}
              voteCount={this.props.voteCount}
            />
          </div>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <span className='d-block'>{this.props.postContent}</span>
          </div>
          <button
            type='button'
            onClick={this.handleReply}
            className='btn btn-link'>
            Reply
          </button>
        </div>

        <div>
          {this.state.replies.map(post => (
            <Post
              key={post.key}
              id={post.key}
              depth={post.depth}
              name={post.name}
              postContent={post.postContent}
              voteCount={post.voteCount}
              onVoteChange={this.handleReplyVoteChange}
            />
          ))}
        </div>
        {this.renderReplyForm()}
      </div>
    )
  }
}
