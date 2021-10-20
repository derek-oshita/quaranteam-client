import React from "react";

import Comment from "../Comment/Comment";

function CommentList(props) {
  let stateComments = props.comments.filter(
    (commentObj) => commentObj.stateId === props.stateCode
  );
  const commentList = stateComments.map((stateComment) => {
    return <Comment comment={stateComment} />;
  });
  return <>{commentList}</>;
}

export default CommentList;
