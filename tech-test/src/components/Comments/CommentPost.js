import React, { Component } from 'react';
import '../../css/CommentPost.css'

class CommentPost extends Component {

    state = {
        body: ''
    }

    render() {
        return (
            <div className="container commentPost">
                <img src={this.props.user.userUrl} alt="user avatar" />
                <form>
                    <input id="textInput" type="input" value={this.state.body} onChange={(event) => this.handleUserInput(event)} required />
                    <input id="submitInput" type="submit" value="Comment" onClick={() => this.handleSubmit} />
                </form>
            </div>
        );
    }

    handleUserInput(e) {
        const value = e.target.value;
        this.setState({
            body: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const newComment = {
            user: `${this.props.user.firstName} ${this.props.user.lastName}`,
            avatar: this.props.user.userUrl,
            body: this.state.body,
            posted: 'Now',
            likes: 0,
            replies: {}
        };

        this.props.post(newComment)
    };
}

export default CommentPost;