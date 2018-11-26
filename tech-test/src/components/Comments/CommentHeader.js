import React from 'react';
import '../../css/CommentHeader.css'

const CommentHeader = ({ commentCount }) => {
    return (
        <div className="headContainer">
            <p> {commentCount} comments </p>
        </div>
    );
};

export default CommentHeader;