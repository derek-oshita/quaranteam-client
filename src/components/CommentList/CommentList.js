// IMPORTS
import React from 'react';
import Comment from '../Comment/Comment';

function CommentList(props) {
    console.log('CommentList comments: ', props.comments)
    console.log('CommentList stateCode: ', props.stateCode)
    // const commentList = props.comments.map((commentObj) => {
    // return (
    //     <Comment comment={commentObj} list={true} />
    // )
    let stateComments = props.comments.filter(commentObj => commentObj.stateId === props.stateCode); 
    // console.log('stateComments: ', stateComments);
    const commentList = stateComments.map((stateComment) => {
        return (
            <Comment comment={stateComment} />
        )
    })
  return (
    <div className="comments-container">
      {commentList}
      {/* commentList */}
    </div>
  );
}

export default CommentList;