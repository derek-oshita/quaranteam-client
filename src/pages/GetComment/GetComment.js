// IMPORTS
import React from 'react';
import Comment from '../../components/Comment/Comment';
import CommentModel from '../../models/comment';

// GET COMMENT
class GetComment extends React.Component {
  state = {
    comment: {},
  };

  componentDidMount() {
    CommentModel.getCommentById(this.props.match.params.id)
      .then((result) => {
        console.log(result);
        this.setState({comment: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log('currentUser at GetComment: ', this.props.currentUser);
    let currentUser = this.props.currentUser; 
    return <Comment comment={this.state.comment} list={false} currentUser={currentUser}/>;
  }
}

// EXPORTS
export default GetComment;
