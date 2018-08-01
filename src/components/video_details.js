import React from 'react';

const video_details = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    }
 

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe style={{margin:'0px 10%', width: '80%',height:'79%'}} title={video.snippet.title} className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div><h3>{video.snippet.title}</h3></div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default video_details;