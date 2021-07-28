import React from 'react';
import { IVideo } from './App';
import LoadImage from '../../images/loading-buffering.gif';

import './VideoDetail.scss';

interface IProps {
  video: IVideo | undefined;
}

const VideoDetail = ({ video }: IProps) => {
  if (!video) {
    return (
      <div className="loading-detail">
        <img className="loading-gif" src={LoadImage} alt="loading gif" />
      </div>
    );
  }
  return (
    <div className="detail-wrapper">
      <div className="detail-wrapper__forIframe">
        <iframe
          className="detail-wrapper__forIframe"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>

      <h4 className="detail-wrapper__h4">{video.snippet.title}</h4>
      <p className="detail-wrapper__description">{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
