import React, { Component } from 'react';
import '../../css/NewComments.css'

class NewComments extends Component {
    render() {
        return (
            <div className="container">
                <div> 
                    <img id="commentAvatar" src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} alt="user avatar"/>
                </div>
                <div>
                    <div id="commentUserName">
                        <p id="commentUser"> John Smith </p>
                        <p id="commentTime"> 2 hours ago </p>
                    </div>
                    <div> 
                        <p> Thought this worked out well last night, we should do it again next week.</p>
                    </div>
                    <div id="commentInteractions"> 
                        <p> Likes </p>
                        <p> Reply </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewComments;