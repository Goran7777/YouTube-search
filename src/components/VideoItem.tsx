import React from 'react';
import { IVideo } from './App';

import './VideoItem.scss';

interface IProps {
  video: IVideo;
  onVideoSelect: (arg: IVideo) => void;
}

const VideoItem = ({ video, onVideoSelect }: IProps) => {
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="video-item__image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <p className="video-item__paragraph">{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
