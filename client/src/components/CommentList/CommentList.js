import React from "react";
import "./CommentList.css"
import Comment from '../../assets/icons/add_comment.svg';
import axios from "axios";
import { useState } from "react";

function CommentList(props) {

    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }


    const [comment, setComment] = useState('');

    const formHandler = (event) => {
        event.preventDefault();
        const formElement = event.target;
        const commentFromForm = formElement.comment.value;
        let videoID = props.currentVideoDetails.id
        axios.post('http://localhost:5001/videos/'+ videoID + "/comments", {
            comment: commentFromForm,
            name: "name"
        })
        .then((response) => {
            console.log(response.data.id)
            })

    }

    return (
        <div className="main-video__details">
            <section className="main-video__description-box">
            <p className="main-video__description-title">{props.currentVideoDetails.title}</p>
            <hr/>
                <ul key={props.currentVideoDetails.id} className="main-video__description">
                    <div className="main-video__description-box1" id={props.currentVideoDetails.id}>
                        <li className="main-video__description-channel" id={props.currentVideoDetails.id}>{props.currentVideoDetails.channel}</li>
                        <li className="main-video__description-date" id={props.currentVideoDetails.id}>{formatMyDate(props.currentVideoDetails.timestamp)}</li>
                    </div>

                    <div className="main-video__description-box2" id={props.currentVideoDetails.id}>
                        <li className="main-video__description-views" id={props.currentVideoDetails.id}>{props.currentVideoDetails.views}</li>
                        <li className="main-video__description-likes" id={props.currentVideoDetails.id}>{props.currentVideoDetails.likes}</li>
                    </div>
                </ul>
                <hr/>

                <p>{props.currentVideoDetails.description}</p>
            </section>

            
            <section className="comments-section">
                <div className="comments-number">{props.currentVideoDetails.comments ? props.currentVideoDetails.comments.map((comments) =>
                  <p>{comments.length}</p>
                  ): <div>Comments Loading</div>}</div>
                <form className='comment-form' onSubmit={formHandler}>
            
                        <input type="image" className='comment-form__image' src='http://localhost:5001/static/Mohan-muruge.jpg' alt="text" value={props.image} />
                        <div className='comment-form__input-container'>
                        <label className="under480">JOIN THE CONVERSATION
                        <input type="text" className='comment-form__input'placeholder='Add a new comment' value={comment} onChange={(event) => {setComment(event.target.value)}} name="comment" />
                        </label>
                        <div className="comment-form__button-container">
                            <button type='submit' className='comment-form__button' onClick={props.currentVideoDetails.changeVideo}><img src={Comment} alt="Comment"/><p>Comment</p></button>
                        </div>
                        </div>
                </form>

             <div className="comments-comments" id={props.currentVideoDetails.id}>{props.currentVideoDetails.comments ? props.currentVideoDetails.comments.map((comments) =>
                <div className="comments-list" id={props.id} >
                    
                    <ul className="comment-list__one">
                        <li className="comments-list__avatar"><img src="" alt="" key={props.id} id={props.id}></img></li>
                    </ul>

                    <ul className="comment-list__two" onClick={props.deleteComment}>
                        <div className="comments-list__line1" id={props.id}>
                        <li className="comments-list__name" key={props.id} id={props.id}>{comments.name}</li>
                        <li className="comments-list__timestamp" key={props.id} id={props.id}>{formatMyDate(comments.timestamp)}</li>
                        </div>
                        <div id={props.id}>
                            <li className="comments-list__comment" key={props.id} id={props.id} >{comments.comment}</li>
                        </div>
                    </ul>
                </div>): <div>Comments Loading</div>}
                </div>
                <hr/>
                </section>
                </div>
    )
}

export default CommentList;