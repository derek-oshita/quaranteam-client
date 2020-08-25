// IMPORTS
import React from 'react';
import './Comment.css'; 

// COMMENT FUNCTION - will likely need to be class based 
function Comment () {
    return (
        <main className="comment-container">
            {/* IMAGE */}
            <img className="comment-image" src="" />
            {/* COMMENT DETAILS */}
            <section className="comment-details-container">
                <p className="comment-title">Title of the Comment...</p>
                <p className="comment-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ab placeat eos quo nihil maxime, aliquam labore saepe quibusdam impedit totam veniam voluptate possimus deleniti. Ad adipisci maxime culpa atque.
                </p>
                <p className="comment-user">Zetsubou_Billy <span className="comment-date">08/24/2020</span></p>
            </section>
        </main>
    )
}; 

export default Comment; 