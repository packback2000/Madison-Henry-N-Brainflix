import { Link } from "react-router-dom";

function Video(props) {
  
  return (
    <section className="next-video__list">
    <Link className="Video" to={`/videos/${props.id}`}>
      <div className="next-videos">
        <div className="video-list__image-container">
            <img src={props.image} alt="video-thumbnails" className="video-list__image" />
        </div>
        <div className="video-list__comments-container">
          <p className="video-list__title" id={props.id}>{props.title}</p>
          <p className="video-list__channel" id={props.id}>{props.channel}</p>
        </div>
      </div>
    </Link>
    </section>
  );
}

  export default Video;