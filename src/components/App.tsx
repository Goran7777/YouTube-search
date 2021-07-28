import React, { useState, useEffect } from 'react';
import youtube from '../api/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import './App.scss';
import { AxiosResponse } from 'axios';

export interface IVideo {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}
export interface Id {
  kind: string;
  videoId: string;
}
export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}
export interface Thumbnails {
  default: DefaultOrMediumOrHigh;
  medium: DefaultOrMediumOrHigh;
  high: DefaultOrMediumOrHigh;
}
export interface DefaultOrMediumOrHigh {
  url: string;
  width: number;
  height: number;
}

const App = () => {
  const [videos, setVideos] = useState<IVideo[] | []>([]);
  const [selectedVideo, setSelectedVideo] = useState<IVideo | undefined>(null);

  useEffect(() => {
    onSubmitForm('welcome');
  }, []);
  const onSubmitForm = async (term: string): Promise<void> => {
    const response: AxiosResponse = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos([...response.data.items]);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video: IVideo) => {
    setSelectedVideo(video);
  };
  return (
    <div className="container">
      <SearchBar onSubmitForm={onSubmitForm} />
      <div className="container__main">
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
      </div>
    </div>
  );
};

export default App;
