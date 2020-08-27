// IMPORTS
import React from 'react';
import CommentModel from '../../models/comment';
import { withRouter, Link } from 'react-router-dom';
import './Comment.css'; 
// ANT DESIGN 
import { Button } from 'antd';


// COMMENT FUNCTION - will likely need to be class based 
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
        <div className="comment-container">
        {/* TITLE */}
            <div className="comment-title-container">
                <p className="comment-title">
                <Link key={comment._id} to={`/states/${comment.stateId}/comment/${comment._id}`}>
                    {comment.title}
                </Link>
                </p>
            </div>
        {/* BODY */}
            <div className="comment-body-container">
                <p className="comment-body">
                    {comment.body}
                </p>
            </div>
        {/* USER INFO      */}
            <div className="comment-user-container">
                <p className="comment-user">User Id / but needs to be user name...: {comment.userId}<span className="comment-date"></span></p>


                { props.currentUser === comment.userId ?
                    (   <>
                            <Link key={comment._id} to={`/states/${comment.stateId}/comment/${comment._id}/edit`}>
                            <Button type="primary">Edit Comment</Button>
                            </Link>
                            <Button type="primary" onClick={handleDelete} danger>Delete Comment</Button>
                        </>
                    )
                    :
                    (
                        <> </>
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(Comment); 

/* 

                {
                    props.data !== undefined ? 
                    (<p>{props.data.nickname}</p>)
                    : 
                    (<p>Loading...</p>)
        
                }

                <Link key={comment._id} to={`/states/${comment.stateId}/comment/${comment._id}/edit`}>
                <Button type="primary">Edit Comment</Button>
                </Link>
                <Button type="primary" onClick={handleDelete} danger>Delete Comment</Button>


*/ 
