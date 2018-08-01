import React from 'react';

const video_list_item = ({video, setVideo}) => {

const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item" onClick={()=>{setVideo(video)}}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt="" src = {imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                    {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default video_list_item;