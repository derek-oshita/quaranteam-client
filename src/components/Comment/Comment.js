// IMPORTS
import React from 'react';
import CommentModel from '../../models/comment';
import { withRouter, Link } from 'react-router-dom';
import './Comment.css'; 
// ANT DESIGN 
import { Button } from 'antd';


// COMMENT FUNCTION 
function Comment (props) {
    const { comment } = props; 

    const handleDelete = () => {
         CommentModel.deleteComment(comment._id)
          .then((result) => props.history.push(`/states/${comment.stateId}`))
          .catch((err) => console.log(err));
      };
    console.log('Comment currentUser: ', props.currentUser)
    let currentUser = props.currentUser; 
    return (
        <div className="mother-comment">
            <div className="comment-container">
            {/* TITLE */}
            <Link key={comment._id} to={`/states/${comment.stateId}/comment/${comment._id}`}>
                <div className="comment-title-container">
                    <p className="comment-title">
                        {comment.title}
                    </p>
                </div>
            </Link>
            {/* BODY */}
                <div className="comment-body-container">
                    <p className="comment-body">
                        {comment.body}
                    </p>
                </div>
            {/* USER INFO      */}
                <div className="comment-user-container">
                    <p className="comment-user">Username: {comment.userId}<span className="comment-date"></span></p>

                    { props.currentUser === comment.userId ?
                        (   <>
                                <Link key={comment._id} to={`/states/${comment.stateId}/comment/${comment._id}/edit`}>
                                <Button type="primary">Edit Comment</Button>
                                </Link>
                                <Button type="primary" onClick={handleDelete} danger>Delete Comment</Button>
                            </>
                        )
                        :
                        ( <> </> )
                    }
                </div>
            </div>
        </div>
    )
}

// EXPORTS
export default withRouter(Comment); 

