import React, { Component } from 'react';
import '../../css/NewComments.css'
import ReplyComment from './ReplyComment';

class NewComments extends Component {
    render() {
        return (
            this.props.comments.map(comment => {
                return (
                    <div key={comment.user}>
                        <div className="container" id="newCommentContainer">
                            <div>
                                <img id="commentAvatar" src={comment.avatar} alt="user avatar" />
                            </div>
                            <div>
                                <div id="commentUserName">
                                    <p id="commentUser"> {comment.user} </p>
                                    <p id="commentTime"> 2 hours ago </p>
                                </div>
                                <div id="commentBody">
                                    <p> {comment.body} </p>
                                </div>
                                <div id="commentInteractions" className="actionText">
                                    <div className="actionText">
                                        <i className="icon ion-md-thumbs-up"></i> <p> 3 Likes </p>
                                    </div>
                                    <div className="actionText">
                                        <i className="icon ion-md-undo"></i> <p> Reply </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ReplyComment replies={comment.replies} />
                    </div>
                )
            })
        );
    }
}

export default NewComments;