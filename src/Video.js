import React,{useRef,useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from "./VideoSidebar";

function Video({url,channel,description,song,likes,messages,shares}) {

const [playing,setPlaying]=useState(false);
const videoRef=useRef(null);
	
const onVideoPress =()=>{
 if(playing){
	videoRef.current.pause(); 
	setPlaying(false);
 }else{
	videoRef.current.play();
	setPlaying(true);
 }
}

  return (
    <div className="video">
    <div className="tiktok_logo">
	<img  src="https://logodownload.org/wp-content/uploads/2019/08/tiktok-logo-9.png" alt="tiktok logo"/>
	<p>@{channel}</p>
	</div>
    <video 
	className="video_player" 
	loop
	ref={videoRef}
	onClick={onVideoPress}
    src={url}>
	</video>
	<VideoFooter channel={channel} description={description} song={song}/>
	<VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  );
}

export default Video;
