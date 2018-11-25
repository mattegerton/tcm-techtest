import React, { Component } from 'react';
import '../../css/ReplyComment.css'

class ReplyComment extends Component {
    render() {
        return (
            <div className="container" id="replyCommentContainer">
                <div> 
                    <img id="replyAvatar" src={`https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} alt="user avatar"/>
                </div>
                <div>
                    <div id="replyUserName">
                        <p id="replyUser"> Sarah Connor </p>
                        <p id="replyTime"> 20 minutes ago </p>
                    </div>
                    <div id="replyBody"> 
                        <p> Agreed! The players responded really well to it. </p>
                    </div>
                    <div id="replyInteractions" className="actionText"> 
                        <div className="actionText">
                            <i className="icon ion-md-thumbs-up"></i> <p> </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReplyComment;