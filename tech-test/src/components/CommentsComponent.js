import React, { Component } from 'react';
import '../css/CommentsContainer.css'
import CommentHeader from '../components/Comments/CommentHeader'
import CommentPost from './Comments/CommentPost';
import NewComments from './Comments/NewComments';

class CommentsComponent extends Component {
    render() {
        return (
            <div id="commentsContainer">
                <CommentHeader />
                <CommentPost user={this.props.user}/>
                <NewComments />
            </div>
        );
    }
}

export default CommentsComponent;