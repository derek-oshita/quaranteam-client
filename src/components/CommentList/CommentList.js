// IMPORTS
import React from 'react';
import Comment from '../Comment/Comment';

function CommentList(props) {
    console.log('CommentList: ', props.comments)
  const commentList = props.comments.map((commentObj) => {
    return (
        <Comment comment={commentObj} list={true} />
    )
  });

  return (
    <div className="comments-container">
      {commentList}
      {/* commentList */}
    </div>
  );
}

export default CommentList;