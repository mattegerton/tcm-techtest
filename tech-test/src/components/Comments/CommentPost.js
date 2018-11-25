import React, { Component } from 'react';
import '../../css/CommentPost.css'

class CommentPost extends Component {
    render() {
        return (
            <div className="container commentPost">
                <img src={this.props.user.userUrl} alt="user avatar" />
                <input id="textInput" type="input" value="Write a comment"/>
                <input id="submitInput" type="submit" value="Comment"/>
            </div>
        );
    }
}

export default CommentPost;