import React, { Component } from 'react';
import '../../css/ReplyComment.css'
const isEmpty = require('lodash.isempty');

class ReplyComment extends Component {
    render() {
        return isEmpty(this.props.replies) ? null :
            (
                <div className="container" id="replyCommentContainer">
                    <div>
                        <img id="replyAvatar" src={this.props.replies.avatar} alt="user avatar" />
                    </div>
                    <div>
                        <div id="replyUserName">
                            <p id="replyUser"> {this.props.replies.user} </p>
                            <p id="replyTime"> 20 minutes ago </p>
                        </div>
                        <div id="replyBody">
                            <p> {this.props.replies.body} </p>
                        </div>
                        <div id="replyInteractions" className="actionText">
                            <div className="actionText">
                                <i className="icon ion-md-thumbs-up"></i> <p> </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // return (
        //     <div className="container" id="replyCommentContainer">
        //         <div>
        //             <img id="replyAvatar" src={this.props.replies.avatar} alt="user avatar" />
        //         </div>
        //         <div>
        //             <div id="replyUserName">
        //                 <p id="replyUser"> {this.props.replies.user} </p>
        //                 <p id="replyTime"> 20 minutes ago </p>
        //             </div>
        //             <div id="replyBody">
        //                 <p> {this.props.replies.body} </p>
        //             </div>
        //             <div id="replyInteractions" className="actionText">
        //                 <div className="actionText">
        //                     <i className="icon ion-md-thumbs-up"></i> <p> </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}

export default ReplyComment;