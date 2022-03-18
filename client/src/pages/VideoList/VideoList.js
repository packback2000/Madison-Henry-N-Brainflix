import React from "react";
import Video from "../../components/Videos/Videos";
import axios from "axios";
import Player from "../../components/Player/Player";
import CommentList from "../../components/CommentList/CommentList";

export default class VideoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: [],
          currentVideo: {},
          videoDetails: [],
        }
    }
    
      fetchVideoDetails() {
        axios.get('http://localhost:5001/videos')
        .then((response) => {
          let allData = response.data;
          this.setState({
            data: allData,
          })
          
        })
        
      }
    
      componentDidMount() {
        this.fetchVideoDetails();
        let videoID = this.props.match.params.videoID
        axios.get('http://localhost:5001/videos/'+ videoID)
        .then(response => {
            let mainVideoData = response.data;
            this.setState({
                currentVideo: mainVideoData
            })
        })
      }

      componentDidUpdate(prevProps, prevState) {
        let videoID = this.props.match.params.videoID;
        axios.get('http://localhost:5001/videos/'+ videoID)
        .then(response => {
            let mainvideoData = response.data
            if (prevState.currentVideo.id !== this.props.match.params.videoID) {
                this.setState({
                    currentVideo: mainvideoData,
                })
            }
        })
      }

      componentWillUnmount() {
        console.log('componentWillUnmount');
      }
    
      render () {
        
      return (
        <section className="video-player">
          
        <Player currentVideoDetails = {this.state.currentVideo}/>

       <section className="video-details__next-videos">
        
        <CommentList 
           currentVideoDetails = {this.state.currentVideo} 
           deleteComment = {this.deleteComment}
        />

           <section className="next-videos__video-list">
           <p className="next-videos__label">Next Videos</p>
          {this.state.data.map((video) =>
          <div key={video.id} className="Videos__video">
               <Video
                   key={video.id}
                   id = {video.id}
                   title={video.title}
                   image={video.image}
                   channel={video.channel}
                   video={video.video}
                   handleClick = {this.handleClick}
                   handleDelete = {this.handleDelete}
                   handleSubmit = {this.handleSubmit}
               />
               
            </div>
          )} 
          </section>
          </section>
      </section>
      );
    }
}