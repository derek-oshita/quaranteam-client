// IMPORTS
import React from 'react';
import './Comment.css'; 
// ANT DESIGN 


// COMMENT FUNCTION - will likely need to be class based 
function Comment (props) {
    console.log(props)
    return (
        <div className="comment-container">
        {/* <img className="comment-image" src="" /> */}
        {/* TITLE */}
            <div className="comment-title-container">
                <p className="comment-title">Title of the Comment...</p>
            </div>
        {/* BODY */}
            <div className="comment-body-container">
                <p className="comment-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ab placeat eos quo nihil maxime, aliquam labore saepe quibusdam impedit totam veniam voluptate possimus deleniti. Ad adipisci maxime culpa atque.
                </p>
            </div>
        {/* USER INFO      */}
            <div className="comment-user-container">
                <p className="comment-user">Zetsubou_Billy <span className="comment-date">08/24/2020</span></p>
            </div>
        </div>
    )
}

export default Comment; 

/* 



<img className="comment-image" src="" />

<section className="comment-details-container">
<p className="comment-title">Title of the Comment...</p>
<p className="comment-body">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ab placeat eos quo nihil maxime, aliquam labore saepe quibusdam impedit totam veniam voluptate possimus deleniti. Ad adipisci maxime culpa atque.
</p>
<p className="comment-user">Zetsubou_Billy <span className="comment-date">08/24/2020</span></p>
</section>
*/