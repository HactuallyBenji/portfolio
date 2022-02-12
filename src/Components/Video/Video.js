import React from 'react';
import './Video.css';

const Video = (props) => {
    return (
        <div className="video-player"> 
            <iframe 
                width="560" 
                height="315" 
                src={props.src} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    );
}

export default Video;
