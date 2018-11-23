import React, { Component } from 'react';
import CommentHeader from './CommentHeader';
import '../css/FullCommentComponent.css'
import CommentPost from './CommentPost';

class FullCommentComponent extends Component {

    state = {
        comments: [],
        loads: false
    }

    render() {
        return (
            <div id="fullCommentComponent">
                <CommentHeader commentCount={this.state.comments}/> 
                <CommentPost  user={this.props.user}/>
            </div>
        );
    }
}

export default FullCommentComponent;