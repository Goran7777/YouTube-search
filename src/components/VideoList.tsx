import React from 'react';
import VideoItem from './VideoItem';

import './VideoList.scss';

import { IVideo } from './App';

interface IProps {
  videos: IVideo[];
  onVideoSelect: (arg: IVideo) => void;
}

const VideoList = ({ videos, onVideoSelect }: IProps) => {
  return (
    <div className="video-wrapper">
      {videos.map((video) => (
        <VideoItem
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      ))}
    </div>
  );
};

export default VideoList;
