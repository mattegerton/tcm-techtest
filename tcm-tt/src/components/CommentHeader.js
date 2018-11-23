import React from 'react';
import '../css/CommentHeader.css'

const CommentHeader = ({commentCount}) => {
    return (
        <div>
           {commentCount.length === 0 ? <p className="commentHeader"> There are no comments to show. </p> : <p className="commentHeader"> {commentCount.length} Comments Added. </p>}
        </div>
    );
};

export default CommentHeader;