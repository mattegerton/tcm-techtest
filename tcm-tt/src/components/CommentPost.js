import React, { Component } from 'react';
import '../css/CommentPost.css'

class CommentPost extends Component {

    state = {
        body : ''
    }
    render() {
        return (
            <div id="commentPost">
                <form>
                    <img id="avatarPost" src={this.props.user.avatarUrl} alt="avatar" />    
                    <input id="postInput" defaultValue="Write a comment" onChange={this.handleCommentPost} />
                    <input id="postSubmit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CommentPost;