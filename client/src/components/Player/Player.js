import React from "react";
import './Player.css';
import Play from "../../assets/icons/play.svg";
import FullScreen from "../../assets/icons/fullscreen.svg";
import Volume from "../../assets/icons/volume_up.svg";
import VolumeOff from "../../assets/icons/volume_off.svg";
import Scrubber from "../../assets/icons/scrub.svg";
import { useRef } from "react";
import Pause from "../../assets/icons/pause.svg";
import {useState} from "react";
import { Link } from "react-router-dom";

function Player(props) {


    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [sound, setSound] = useState(true);
    const [time, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const updateTime = () => {
        setProgress((videoRef.current?.currentTime / props.currentVideoDetails.duration) * 100);
    }

    const videoPlayerFunction = (controls) => {
        if (controls === "play") {
            videoRef.current.play();
            setPlaying(true);
            let vid = document.getElementById(props.currentVideoDetails.id);
            setVideoTime(vid.duration);
        } else if (controls === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    }

    const videoSoundFunction = (sound) => {
        if (sound === "on") {
            videoRef.current.play();
            setSound(true);
        } else if (sound === "off") {
            videoRef.current.pause();
            setSound(false);
        }
    }
    return(
       
        <section className="main-video" key={props.currentVideoDetails.id} id={props.currentVideoDetails.id}>
             <Link to={`/videos/84e96018-4022-434e-80bf-000ce4cd12b8`}></Link>
            <div className="video-container">
            <video
                onTimeUpdate={updateTime}
                ref={videoRef}
               
                src = {props.video}
                poster={props.currentVideoDetails.image}
                video = {props.currentVideoDetails.video}
                className="main-video__video"
                id={props.currentVideoDetails.id}
            >   
                <source src={props.currentVideoDetails.video} />
            </video>
            <div className="video-controls__container">
                    <div className="controls">         
                        <div className="video-controls__time">
                       
                       {playing ? (
                           <img
                            onClick={() => videoPlayerFunction("pause")}
                            className="controls-icon"
                            alt=""
                            src={Pause}
                            />
                       ) : (
                        <img 
                            className="controls-icon" 
                            alt="" 
                            src={Play}
                            onClick={() => videoPlayerFunction("play")}
                        />
                       )}
                        
                        <div className="video-time__progressbar-container">
                            <img src={Scrubber} alt="" className="progressbar" /> 
                            <p className="video-time">
                                0:00-{props.currentVideoDetails.duration}
                            </p>
                        </div>
                       
                        <img className="controls-icon" alt="" src={FullScreen}/>

                        {sound ? (
                            <img 
                                onClick={() => videoSoundFunction("on")}
                                className="controls-icon" 
                                alt="" 
                                src={Volume}
                            />
                        ) : (
                            <img 
                                className="controls-icon"
                                alt=""
                                src={VolumeOff}
                                onClick = {() => videoSoundFunction("off")}
                            />
                        )}
                        
                    </div>
                </div>
                </div>
            </div>
           </section>
           
    )
}
export default Player;
