// IMPORTS
import React from 'react';
import CommentModel from '../../models/comment';

// EDIT COMMENT
class EditComment extends React.Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    CommentModel.getCommentById(this.props.match.params.id)
      .then((result) => this.setState(result))
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    if (event.target.value === 'on') {
      event.target.value = true;
    }
    
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    CommentModel.updateComment(this.state, this.props.match.params.id)
      .then((result) => {
        console.log(result);
      });
    this.props.history.push(`/states/${this.props.match.params.state}`);
  };

  render() {
    const { title, body } = this.state;

    return (
      <>
            <form onSubmit={this.handleSubmit}>
              <h2>Edit Comment</h2>
              <div>
                <label htmlFor="title">Title</label>
                <input onInput={this.handleChange} value={title} type="text" name="title" />
              </div>
              <div>
                <label htmlFor="body">Body</label>
                <input onInput={this.handleChange} value={body} type="text" name="body" />
              </div>
              <button type="submit">Update Comment</button>
            </form>
      </>
    )
  }
}

// EXPORTS
export default EditComment; 