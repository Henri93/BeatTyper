import React from 'react'

export class Voter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.voteCount
    }

    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  handleUpVote() {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
    this.props.onVoteChange(count + 1)
  }

  handleDownVote() {
    const { count } = this.state
    const newCount = count - 1 < 0 ? 0 : count - 1
    this.setState({
      count: newCount
    })
    this.props.onVoteChange(newCount)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button
          type='button'
          onClick={this.handleUpVote}
          className='btn btn-success btn-sm'>
          ▲
        </button>
        <strong className='text-gray-dark'>{count}</strong>
        <button
          type='button'
          onClick={this.handleDownVote}
          className='btn btn-danger btn-sm'>
          ▼
        </button>
      </div>
    )
  }
}
