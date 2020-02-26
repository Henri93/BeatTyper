import React from 'react'

export class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameHolder: 'Name...',
      postContentHolder: 'write something here',
      name: '',
      postContent: '',
      isEnabled: false
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePostChange = this.handlePostChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderSubmitButton = this.renderSubmitButton.bind(this)
  }

  handleNameChange(event) {
    const name = event.target.value
    if (name !== '' && this.state.postContent !== '') {
      this.setState({ isEnabled: true })
    } else {
      this.setState({ isEnabled: false })
    }
    this.setState({ name: name })
  }

  handlePostChange(event) {
    const postContent = event.target.value
    if (this.state.name !== '' && postContent !== '') {
      this.setState({ isEnabled: true })
    } else {
      this.setState({ isEnabled: false })
    }
    this.setState({ postContent: postContent })
  }

  handleSubmit(event) {
    this.props.onPostSubmit(event, this.state.name, this.state.postContent)
    this.setState({ name: '', postContent: '' })
    event.preventDefault()
  }

  renderSubmitButton() {
    if (this.state.isEnabled) {
      return (
        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      )
    } else {
      return (
        <button type='submit' className='btn btn-primary' disabled>
          Post
        </button>
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            name='name'
            onChange={this.handleNameChange}
            placeholder={this.state.nameHolder}
            value={this.state.name}
          />
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            type='text'
            name='postContent'
            onChange={this.handlePostChange}
            placeholder={this.state.postContentHolder}
            value={this.state.postContent}
          />
        </div>

        {this.renderSubmitButton()}
      </form>
    )
  }
}
