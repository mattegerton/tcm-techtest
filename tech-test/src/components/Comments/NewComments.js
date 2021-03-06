import React, { Component } from 'react';
import '../../css/NewComments.css'
import ReplyComment from './ReplyComment';
import VerifiedLogo from '../VerifiedLogo';

class NewComments extends Component {
    render() {
        return (
            this.props.comments.map(comment => {
                return (
                    <div key={comment.user}>
                        <div className="container" id="newCommentContainer">
                            <div>
                                <img id="commentAvatar" src={comment.avatar} alt="user avatar" />
                                {comment.verified ? <VerifiedLogo /> : null}
                            </div>
                            <div>
                                <div id="commentUserName">
                                    <p id="commentUser"> {comment.user} </p>
                                    <p id="commentTime"> {comment.posted} </p>
                                    <i id="commentDropIcon" className="icon ion-md-arrow-dropdown"></i>
                                </div>
                                <div id="commentBody">
                                    <p> {comment.body} </p>
                                </div>
                                <div id="commentInteractions" className="actionText">
                                    <div className="actionText">
                                        <i className="icon ion-md-thumbs-up"></i> <p> {comment.likes} Likes </p>
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