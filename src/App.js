import React,{useState,useEffect} from 'react';
import './App.css';
import Video from "./Video";
import video1 from "./v1.mp4";
import video2 from "./v2.mp4";
import video3 from "./v3.mp4";
import video4 from "./v4.mp4";
import video5 from "./v5.mp4";
import video6 from "./v6.mp4";
import video7 from "./v7.mp4";
import video8 from "./v8.mp4";
import video9 from "./v9.mp4";
import db from "./firebase";

function App() {
	
/* const [videos,setVideos] =useState([]);
	
useEffect(()=>{
 db.collection('videos').onSnapshot(snapshot=>(
  setVideos(snapshot.docs.map(doc=>doc.data()))
 ));
	
},[videos]) */

  return (
    <div className="app">
	<div className="app_videos">
{/*	{videos.map(({url,channel,description,likes,song,shares,messages})=>{
			<Video
				url={{url}}
				channel={channel}
				description={description}
				song={song}
				likes={likes}
				messages={messages}
				shares={shares}/>
		})}   */}
	 <Video url={video1} channel="luciferMorningstar" description="Guyysss! Check out this new video.." song=" No Guidance-Chris Browm ft.Drake" likes={121} messages={257} shares={345}/>
	 <Video url={video2} channel="iAmLucifer" description="Guyysss! Check out my another new video.." song="Devil Devil-Milck" likes={678} messages={467} shares={256}/>
	 <Video url={video3} channel="la.casa.de.papel" description="Tokyo Tokyo Tokyo!!" song="la.casa.de.papel . Original Audio" likes={3000} messages={56} shares={366}/>
	 <Video url={video4} channel="nagmamirajkar" description="Kashish turned me into indian bride!" song="hamelpatel_ . Original Audio" likes={3456} messages={345} shares={536}/>
	 <Video url={video5} channel="lacasadeleyendas" description="Professor Planned it!!" song="lacasadeleyendas . Original Audio" likes={467} messages={368} shares={36}/>
	 <Video url={video6} channel="lacasadeleyandas" description="Like when you see your favourite..." song="lacasadeleyendas . Original Audio" likes={479} messages={25} shares={251}/>
	 <Video url={video7} channel="harry_potter_booklovers" description="Haugwards is Home:" song="harry_potter_booklovers.Original Audio" likes={457} messages={258} shares={24}/>
	 <Video url={video8} channel="dakotajohnson" description="She iss sooo beautiful" song="_truelovee__.Original Audio" likes={345} messages={246} shares={238}/>
	 <Video url={video9} channel="daily.dakotajohnson" description="she is Love...." song="daily.dakotajohnson.Original Audio" likes={189} messages={44} shares={46}/>
	
	</div>
 </div>
  );
}

export default App;
