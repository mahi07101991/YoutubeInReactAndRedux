import React from 'react';
import VideoListItem from './video_list_item';
const video_list = props => {
    return (
        <ul className="list-group">
            {
                props.videos.map(
                    (video) => {
                      return <VideoListItem key={video.etag} video={video} setVideo={props.setVideo}/>
                    }
                )
            }
        </ul>
    );
};

export default video_list;