import React from 'react';
import CommentList from '../../components/CommentList/CommentList';
import CommentModel from '../../models/comment';

class CommentListContainer extends React.Component {
  state = {
    comments: [],
  };
  
  componentDidMount() {
    CommentModel.getAllComments()
      .then((result) => {
        this.setState({comments: result});
      })
      .catch((err) => console.log(err))
  };
  render() {
    // console.log('CommentListContainer -', this.props.stateCode)
    return <CommentList comments={this.state.comments} stateCode={this.props.stateCode}/>;
  }
}

export default CommentListContainer; 