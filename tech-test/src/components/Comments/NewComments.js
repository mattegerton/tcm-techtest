import React, { Component } from 'react';
import '../../css/NewComments.css'

class NewComments extends Component {
    render() {
        return (
            <div className="container" id="newCommentContainer">
                <div> 
                    <img id="commentAvatar" src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} alt="user avatar"/>
                </div>
                <div>
                    <div id="commentUserName">
                        <p id="commentUser"> John Smith </p>
                        <p id="commentTime"> 2 hours ago </p>
                    </div>
                    <div id="commentBody"> 
                        <p> Thought this worked out well last night, we should do it again next week.</p>
                    </div>
                    <div id="commentInteractions" className="actionText"> 
                        <div className="actionText">
                            <i class="icon ion-md-thumbs-up"></i> <p> 3 Likes </p>
                        </div>
                        <div className="actionText">
                            <i class="icon ion-md-undo"></i> <p> Reply </p> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewComments;