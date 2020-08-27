// IMPORTS
import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css'

// COMMENTLIST
function CommentList(props) {
    let stateComments = props.comments.filter(commentObj => commentObj.stateId === props.stateCode); 
    const commentList = stateComments.map((stateComment) => {
        return (
            <Comment comment={stateComment} />
        )
    })
  return (
    // <div className="comments-container">
    <>
      {commentList}
    {/* </div> */}
    </>
  );
}

// EXPORTS
export default CommentList;