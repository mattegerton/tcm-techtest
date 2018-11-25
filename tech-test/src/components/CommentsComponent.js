import React, { Component } from 'react';
import '../css/CommentsContainer.css'
import CommentHeader from '../components/Comments/CommentHeader'
import CommentPost from './Comments/CommentPost';
import NewComments from './Comments/NewComments';
import CommentLoad from './Comments/CommentLoad';

class CommentsComponent extends Component {

    state = {
        comments: [
            {
                user: 'David Smith',
                avatar: `https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
                body: 'Thought this worked out well last night, we should do it again next week',
                replies:
                {
                    user: 'Emma Trello',
                    avatar: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
                    body: 'Agreed! The players responded really well to it.'
                }
            },
            {
                user: 'Larry Moore',
                avatar: 'https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                body: 'My lads loved this drill. Will definitely be doing it again, possible adding on or two more defenders to make it harder.',
                replies: {

                }
            }
        ]
    }
    render() {
        return (
            <div id="commentsContainer">
                <CommentHeader />
                <CommentPost user={this.props.user} />
                <NewComments comments={this.state.comments} />
                <CommentLoad />
            </div>
        );
    }
}

export default CommentsComponent;